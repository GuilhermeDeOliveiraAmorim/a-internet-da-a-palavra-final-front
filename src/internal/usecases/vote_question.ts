import axios from "axios";
import { QuestionRepository } from "../repository/question.repository";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type VoteQuestionInputDTO = {
  question_id: string;
  option_id: string;
};

export type VoteQuestionOutputDTO = {
  success_message: string;
  content_message: string;
};

export class VoteQuestionUseCase {
  constructor(private QuestionGateway: QuestionRepository) {}

  async execute(input: VoteQuestionInputDTO): Promise<VoteQuestionOutputDTO> {
    try {
      const output = await this.QuestionGateway.voteQuestion(input);
      return output;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }
}
