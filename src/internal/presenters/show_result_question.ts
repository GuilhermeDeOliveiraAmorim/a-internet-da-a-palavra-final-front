import axios from "axios";
import { PresentersRepository } from "../repository/presenters.repository";

export type ShowResultQuestionOption = {
  icon: string;
  text: string;
  description: string;
  winning_option: boolean;
  number_votes: number;
  percentage_votes: number;
};

export type ShowResultQuestionInputDTO = {
  question_id: string;
};

export type ShowResultQuestionOutputDTO = {
  text: string;
  totalVotes: number;
  options: ShowResultQuestionOption[];
};

export class ShowResultQuestionOptionUseCase {
  constructor(private PresentersGateway: PresentersRepository) {}

  async execute(
    input: ShowResultQuestionInputDTO
  ): Promise<ShowResultQuestionOutputDTO> {
    try {
      const output = await this.PresentersGateway.showResultQuestionOption(
        input
      );
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
