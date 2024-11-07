"use client";

import QuestionCard from "@/components/question_card";
import { useQuery } from "@tanstack/react-query";
import { displaysListQuestions } from "@/internal/query_functions/qf.presenters";
import { useEffect, useState } from "react";
import { DisplaysListQuestionsOutputDTO } from "@/internal/presenters/displays_list_questions";

export default function Home() {
  const [questions, setQuestions] = useState<DisplaysListQuestionsOutputDTO>();

  const {
    data: displaysListQuestionsData,
    error: displaysListQuestionsError,
    isLoading: displaysListQuestionsLoading,
  } = useQuery({
    queryKey: ["months-years-available", "months-years-available"],
    queryFn: () => displaysListQuestions({}),
  });

  useEffect(() => {
    if (displaysListQuestionsData) {
      setQuestions(displaysListQuestionsData);
    }
  }, [displaysListQuestionsData, displaysListQuestionsLoading]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-teal-600 mb-4">
        Let´s Settle This.
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Internet debates have raged for too long.
        <br />
        It´s time to settle the big questions so we can move on.
      </p>

      <div className="flex flex-col items-center justify-center w-full max-w-md gap-4">
        {questions?.list_of_questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
