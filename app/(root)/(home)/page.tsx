import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/questions.action";
import Link from "next/link";
import React from "react";

// const questions = [
//   {
//     _id: "1",
//     title: "Cascading Deletes in SQLAlchemy?",
//     tags: [
//       { _id: "1", name: "python" },
//       { _id: "2", name: "sql" },
//     ],
//     author: {
//       _id: "1",
//       name: "John Doe",
//       picture: "john-doe.jpg",
//     },
//     upvotes: 1500000,
//     views: 500552,
//     answers: [],
//     createdAt: new Date("2023-09-01T12:00:00.000Z"),
//   },
//   {
//     _id: "2",
//     title: "How to center a div?",
//     tags: [
//       { _id: "3", name: "css" },
//       { _id: "4", name: "html" },
//     ],
//     author: {
//       _id: "2",
//       name: "Jane Smith",
//       picture: "jane-smith.jpg",
//     },
//     upvotes: 5,
//     views: 50,
//     answers: [],
//     createdAt: new Date("2021-09-02T10:30:00.000Z"),
//   },
// ];

const Home = async () => {
  const result = await getQuestions({});
  return (
    <>
      {/* <div className="container mx-auto rounded-lg bg-gray-100 p-4 shadow-md">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <div className="col-span-2 row-span-1 min-h-[200px] bg-blue-500">
            Box 1
          </div>

          <div className="col-span-1 row-span-2 bg-green-500">Box 2</div>

          <div className="col-span-1 row-span-2 bg-yellow-500">Box 3</div>

          <div className="col-span-1 row-span-1 bg-red-500">Box 4</div>

          <div className="col-span-2 row-span-1 bg-purple-500">Box 5</div>
        </div>
      </div> */}

      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
