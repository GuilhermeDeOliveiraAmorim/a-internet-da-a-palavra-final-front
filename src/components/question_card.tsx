"use client";

import { useState } from "react";
import { Question } from "@/internal/domain/question";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import DecideButton from "./decide_button";
import ResultCard from "./result_card";
import { useMutation } from "@tanstack/react-query";
import {
  ShowResultQuestionInputDTO,
  ShowResultQuestionOutputDTO,
} from "@/internal/presenters/show_result_question";
import { showResultQuestion } from "@/internal/query_functions/qf.presenters";
import {
  VoteQuestionInputDTO,
  VoteQuestionOutputDTO,
} from "@/internal/usecases/vote_question";
import { voteQuestion } from "@/internal/query_functions/qf.question";

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCardProps) {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<
    ShowResultQuestionOutputDTO | undefined
  >();

  const mutationVoteQuestion = useMutation<
    VoteQuestionOutputDTO,
    Error,
    VoteQuestionInputDTO
  >({
    mutationKey: ["vote-question"],
    mutationFn: voteQuestion,
    onError: (error: Error) => console.error("Error voting question", error),
  });

  const mutationShowResultQuestion = useMutation<
    ShowResultQuestionOutputDTO,
    Error,
    ShowResultQuestionInputDTO
  >({
    mutationKey: ["show-result-question"],
    mutationFn: showResultQuestion,
    onSuccess: (output: ShowResultQuestionOutputDTO) => {
      setResult(output);
      setShowResult(true);
    },
    onError: (error: Error) =>
      console.error("Error getting result question", error),
  });

  const handleOptionClick = (question_id: string, option_id: string) => {
    mutationVoteQuestion.mutate({
      question_id: question_id,
      option_id: option_id,
    });

    mutationShowResultQuestion.mutate({ question_id: question.id });

    setShowResult(true);
  };

  return (
    <div className="w-full max-w-md">
      {showResult && result ? (
        <ResultCard result={result} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{question.text}</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <div className="flex flex-row gap-2 w-full">
              {question.options.map((option, index) => (
                <DecideButton
                  key={index}
                  icon={option.icon}
                  onPress={() => handleOptionClick(question.id, option.id)}
                  index={index}
                  question={option.text}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
