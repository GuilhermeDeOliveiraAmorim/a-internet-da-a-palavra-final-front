import axios from "axios";
import { PresentersRepository } from "../repository/presenters.repository";
import { Question } from "../domain/question";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type DisplaysListQuestionsInputDTO = {};

export type DisplaysListQuestionsOutputDTO = {
  list_of_questions: Question[];
};

export class DisplaysListQuestionsUseCase {
  constructor(private PresentersGateway: PresentersRepository) {}

  async execute(
    input: DisplaysListQuestionsInputDTO
  ): Promise<DisplaysListQuestionsOutputDTO> {
    try {
      const output = await this.PresentersGateway.displaysListQuestions(input);
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
