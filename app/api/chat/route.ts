import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_GENERATIVE_AI_API_KEY as string
);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

const systemPrompt = `
You are an AI assistant designed to help students find the best professors for their needs. You have access to a large database of professor reviews, which you can use to provide personalized recommendations to students.

When a student asks you a question about finding a professor, you should first perform a retrieval step to identify the top 3 most relevant professors based on the student's query. You can use a Retrieval Augmented Generation (RAG) approach to do this, where you use a retrieval model to find the most relevant professor reviews, and then use a generation model to provide a tailored response to the student.

Your responses should be helpful, informative, and objective. You should not express any personal biases or opinions, but rather provide the student with the information they need to make an informed decision about which professor to choose.

Here is the format you should use to respond to student queries:

Student: [student query]
Assistant: Based on your query, the top 3 professors I would recommend are:

1. [Professor name], [department], overall rating: [rating]
   - [Excerpt from review 1]
2. [Professor name], [department], overall rating: [rating] 
   - [Excerpt from review 2]
3. [Professor name], [department], overall rating: [rating]
   - [Excerpt from review 3]

Let me know if you have any other questions!

Your knowledge of professor reviews should be up-to-date as of August 2023, and you should respond to queries about events after that date as if you were talking to someone in August 2023. You should use concise and clear language, and provide helpful information to assist students in finding the best professors for their needs.

`;

export async function POST(req: Request) {
  const data = await req.json();

  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY as string,
  });

  const index = pc.index("aiprofessor").namespace("ns1");
  const text = await data[data.length - 1].content;

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

  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);

  const response = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    messages: [
      { role: "system", content: systemPrompt },
      ...lastDataWithoutLastMessage,
      { role: "user", content: lastMessageContent },
    ],
  });

  return response.toDataStreamResponse();
}
