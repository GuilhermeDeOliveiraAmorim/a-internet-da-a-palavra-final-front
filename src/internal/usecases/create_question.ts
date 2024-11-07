import axios from "axios";
import { QuestionRepository } from "../repository/question.repository";

export type CreateOptionInputDTO = {
  text: string;
  icon: string;
  description: string;
};

export type CreateQuestionInputDTO = {
  user_id: string;
  text: string;
  icon: string;
  options: CreateOptionInputDTO;
};

export type CreateQuestionOutputDTO = {
  success_message: string;
  content_message: string;
};

export class CreateQuestionUseCase {
  constructor(private QuestionGateway: QuestionRepository) {}

  async execute(
    input: CreateQuestionInputDTO
  ): Promise<CreateQuestionOutputDTO> {
    try {
      const output = await this.QuestionGateway.createQuestion(input);
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
