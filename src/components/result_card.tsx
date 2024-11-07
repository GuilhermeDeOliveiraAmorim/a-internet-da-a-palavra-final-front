import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ShowResultQuestionOutputDTO } from "@/internal/presenters/show_result_question";
import { Progress } from "./ui/progress";

type ResultCardProps = {
  result: ShowResultQuestionOutputDTO;
};

export default function ResultCard({ result }: ResultCardProps) {
  const winningOption = result.options.find((option) => option.winning_option);
  const losingOption = result.options.find((option) => !option.winning_option);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{result.text}</CardTitle>
        <CardDescription>
          {winningOption ? winningOption.description : "No winning option"}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        {winningOption && <Progress value={100 - winningOption.number_votes} />}
        <div className="flex flex-row justify-between gap-2 w-full">
          {winningOption && (
            <div>
              {winningOption.text} ({winningOption.percentage_votes}%)
            </div>
          )}

          <div>{result.totalVotes} votes</div>

          {losingOption && (
            <div>
              {losingOption.text} ({losingOption.percentage_votes}%)
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
