"use client";

import { Question } from "@/internal/domain/question";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import DecideButton from "./decide_button";
import ResultCard from "./result_card";
import { useState } from "react";

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCardProps) {
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = () => {
    setShowResult(true);
  };

  return (
    <div className="w-full max-w-md">
      {showResult ? (
        <ResultCard
          result={{
            text: "The internet has decided.",
            totalVotes: 9684985,
            options: [
              {
                text: "Jif",
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWltYWdlLXBsYXkiPjxwYXRoIGQ9Im0xMSAxNi01IDUiLz48cGF0aCBkPSJNMTEgMjFINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxNGEyIDIgMCAwIDEgMiAydjYuNSIvPjxwYXRoIGQ9Ik0xNS43NjUgMjJhLjUuNSAwIDAgMS0uNzY1LS40MjRWMTMuMzhhLjUuNSAwIDAgMSAuNzY1LS40MjRsNS44NzggMy42NzRhMSAxIDAgMCAxIDAgMS42OTZ6Ii8+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjIiLz48L3N2Zz4=",
                description: " It's pronounced jif.",
                number_votes: 14,
                percentage_votes: 46,
                winning_option: false,
              },
              {
                text: "Gif",
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWltYWdlLXBsYXkiPjxwYXRoIGQ9Im0xMSAxNi01IDUiLz48cGF0aCBkPSJNMTEgMjFINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxNGEyIDIgMCAwIDEgMiAydjYuNSIvPjxwYXRoIGQ9Ik0xNS43NjUgMjJhLjUuNSAwIDAgMS0uNzY1LS40MjRWMTMuMzhhLjUuNSAwIDAgMSAuNzY1LS40MjRsNS44NzggMy42NzRhMSAxIDAgMCAxIDAgMS42OTZ6Ii8+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjIiLz48L3N2Zz4=",
                description: " It's pronounced gif.",
                number_votes: 16,
                percentage_votes: 54,
                winning_option: true,
              },
            ],
          }}
        />
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
                  onPress={() => handleOptionClick()}
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
