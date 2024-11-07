import axios from "axios";
import { QuestionRepository } from "../repository/question.repository";

export type DeleteQuestionInputDTO = {
  question_id: string;
};

export type DeleteQuestionOutputDTO = {
  success_message: string;
  content_message: string;
};

export class DeleteQuestionUseCase {
  constructor(private QuestionGateway: QuestionRepository) {}

  async execute(
    input: DeleteQuestionInputDTO
  ): Promise<DeleteQuestionOutputDTO> {
    try {
      const output = await this.QuestionGateway.deleteQuestion(input);
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
