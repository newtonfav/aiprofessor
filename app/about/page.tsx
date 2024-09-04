import React from "react";

export default function About() {
  return (
    <div className="mx-8 mt-3">
      <h2 className="text-primary-500 font-bold text-xl"> About AiProfessor</h2>
      <div className="mb-8">
        Welcome to AiProfessor Your AI-Powered Guide to Finding the Perfect
        Professor!
      </div>
      <div className="text-primary-500 text-xl font-bold">
        What is AiProfessor?
      </div>
      <div className="mb-6">
        AiProfessor is a cutting-edge application that harnesses the power of
        artificial intelligence to help students like you find the best
        professors for your academic journey. We understand that choosing the
        right professor can make a world of difference in your learning
        experience and academic success. <span>How Does It Work?</span>{" "}
        AiProfessor uses advanced Retrieval Augmented Generation (RAG)
        technology to provide personalized professor recommendations based on
        your specific needs and preferences.
      </div>

      <div>
        <p className="text-primary-500 text-xl font-bold">
          Here&apos;s how it works:
        </p>
        <ol className="mb-6 list-decimal pl-4">
          <li>
            You Ask: Simply tell our AI assistant what you&apos;re looking for
            in a professor. Whether it&apos;s a specific teaching style, subject
            expertise, or course difficulty level, we&apos;ve got you covered.
          </li>
          <li>
            We Retrieve: Our AI scans through thousands of real student reviews
            and professor data to find the most relevant matches.
          </li>
          <li>
            We Generate: Based on the retrieved information, our AI crafts a
            personalized response, recommending the top 3 professors that best
            fit your criteria.
          </li>
          <li>
            You Decide: Armed with detailed information and genuine student
            feedback, you can make an informed decision about which professor to
            choose.
          </li>
        </ol>

        <p className="text-primary-500 text-xl font-bold">
          {" "}
          Why Choose AiProfessor?
        </p>

        <div>
          <ol className="mb-6 list-decimal pl-4">
            <li>
              Personalized Recommendations: No two students are alike, and
              neither are their professor preferences. AiProfessor tailors its
              suggestions to your unique needs.
            </li>
            <li>
              Up-to-Date Information: Our database is regularly updated with the
              latest student reviews and professor information.
            </li>
            <li>
              Unbiased Results: Our AI doesn&apos;t play favorites. It provides
              objective recommendations based solely on the data and your
              criteria.
            </li>
            <li>
              Time-Saving: No more hours spent scrolling through endless
              reviews. Get curated, relevant information in seconds.
            </li>
            <li>
              {" "}
              Comprehensive Details: Each recommendation includes the
              professor&apos;s name, department, overall rating, and insightful
              excerpts from student reviews.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
