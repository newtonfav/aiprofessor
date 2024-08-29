import { streamText, convertToCoreMessages } from "ai";
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { bedrock } from "@ai-sdk/amazon-bedrock";

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_GENERATIVE_AI_API_KEY as string
);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

export const maxDuration = 30;

const systemPrompt = `
You are an AI assistant designed to help students find the best professors for their needs. You have access to a large database of professor reviews provided by the system, which you can use to provide personalized recommendations to students. if no relevant information is found in the Tool Result, respond, "Sorry, I don't know.

When a student asks you a question about finding a professor, you should first perform a retrieval step to identify the top 3 most relevant professors based on the student's query. You can use a Retrieval Augmented Generation (RAG) approach to do this, where you use a retrieval model to find the most relevant professor reviews, and then use a generation model to provide a tailored response to the student.

Your responses should be helpful, informative, and objective. You should not express any personal biases or opinions, but rather provide the student with the information they need to make an informed decision about which professor to choose.

`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const pc = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY as string,
    });

    const index = pc.index("aiprofessor").namespace("ns1");
    const text = messages[messages.length - 1].content;

    const embedContent = await model.embedContent(text);
    const embedding = embedContent.embedding;

    const results = await index.query({
      topK: 3,
      includeMetadata: true,
      vector: embedding.values,
    });

    let resultString = `Returned results from vector DB (done automatically):`;

    results.matches.forEach((match) => {
      resultString += `\n
      professor: ${match.id}\n
      department: ${match.metadata?.department}\n
      overall_rating: ${match.metadata?.overall_rating}\n
      difficulty: ${match.metadata?.difficulty}\n
      workload: ${match.metadata?.workload}\n
      teaching_quality: ${match.metadata?.teaching_quality}\n
      \n\n
      `;
    });

    const lastMessage = messages[messages.length - 1];
    const lastMessageContent = lastMessage.content + resultString;
    const messagesWithoutLastMessage = messages.slice(0, messages.length - 1);

    const combinedSystemMessage = `${systemPrompt}\n\nTool Result: ${resultString}`;

    const newMessages = [
      { role: "system", content: combinedSystemMessage },
      ...messagesWithoutLastMessage,
      { role: "user", content: lastMessageContent },
    ];

    const response = await streamText({
      model: bedrock("meta.llama3-70b-instruct-v1:0"),
      messages: convertToCoreMessages(newMessages),
    });

    return response.toDataStreamResponse();
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong! Try again later.");
  }
}
