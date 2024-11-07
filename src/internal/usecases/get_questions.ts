import axios from "axios";
import { QuestionRepository } from "../repository/question.repository";
import { Question } from "../domain/question";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type GetQuestionsInputDTO = {};

export type GetQuestionsOutputDTO = {
  questions: Question[];
};

export class GetQuestionsUseCase {
  constructor(private QuestionGateway: QuestionRepository) {}

  async execute(input: GetQuestionsInputDTO): Promise<GetQuestionsOutputDTO> {
    try {
      const output = await this.QuestionGateway.getQuestions(input);
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
