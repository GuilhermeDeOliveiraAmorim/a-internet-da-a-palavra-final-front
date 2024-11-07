import { AxiosInstance } from "axios";
import { apiRoutes } from "./api_routes";
import { PresentersRepository } from "../repository/presenters.repository";
import {
  DisplaysListQuestionsInputDTO,
  DisplaysListQuestionsOutputDTO,
} from "../presenters/displays_list_questions";
import {
  ShowResultQuestionInputDTO,
  ShowResultQuestionOutputDTO,
} from "../presenters/show_result_question";

export class PresentersGateway implements PresentersRepository {
  constructor(private http: AxiosInstance) {}

  async displaysListQuestions(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    input: DisplaysListQuestionsInputDTO
  ): Promise<DisplaysListQuestionsOutputDTO> {
    try {
      const output = await this.http.get<DisplaysListQuestionsOutputDTO>(
        `${apiRoutes.displaysListQuestions}`
      );

      return output.data;
    } catch (error) {
      throw error;
    }
  }

  async showResultQuestionOption(
    input: ShowResultQuestionInputDTO
  ): Promise<ShowResultQuestionOutputDTO> {
    try {
      const output = await this.http.get<ShowResultQuestionOutputDTO>(
        `${apiRoutes.showResultQuestionOption}?question_id=${input.question_id}`
      );

      return output.data;
    } catch (error) {
      throw error;
    }
  }
}
