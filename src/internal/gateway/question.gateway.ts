import { AxiosInstance } from "axios";
import { apiRoutes } from "./api_routes";
import { QuestionRepository } from "../repository/question.repository";
import {
  CreateQuestionInputDTO,
  CreateQuestionOutputDTO,
} from "../usecases/create_question";
import {
  GetQuestionsInputDTO,
  GetQuestionsOutputDTO,
} from "../usecases/get_questions";
import {
  DeleteQuestionInputDTO,
  DeleteQuestionOutputDTO,
} from "../usecases/delete_question";
import {
  VoteQuestionInputDTO,
  VoteQuestionOutputDTO,
} from "../usecases/vote_question";

export class QuestionGateway implements QuestionRepository {
  constructor(private http: AxiosInstance) {}

  async createQuestion(
    input: CreateQuestionInputDTO
  ): Promise<CreateQuestionOutputDTO> {
    try {
      const output = await this.http.post<CreateQuestionOutputDTO>(
        apiRoutes.createQuestion,
        input
      );

      return output.data;
    } catch (error) {
      throw error;
    }
  }

  async getQuestions(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    input: GetQuestionsInputDTO
  ): Promise<GetQuestionsOutputDTO> {
    try {
      const output = await this.http.get<GetQuestionsOutputDTO>(
        `${apiRoutes.getQuestions}`
      );

      return output.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteQuestion(
    input: DeleteQuestionInputDTO
  ): Promise<DeleteQuestionOutputDTO> {
    try {
      const output = await this.http.delete<DeleteQuestionOutputDTO>(
        `${apiRoutes.deleteQuestion}?question_id=${input.question_id}`
      );

      return output.data;
    } catch (error) {
      throw error;
    }
  }

  async voteQuestion(
    input: VoteQuestionInputDTO
  ): Promise<VoteQuestionOutputDTO> {
    try {
      const output = await this.http.post<VoteQuestionOutputDTO>(
        `${apiRoutes.voteQuestion}?question_id=${input.question_id}&option_id=${input.option_id}`
      );

      console.log("output", output);

      return output.data;
    } catch (error) {
      throw error;
    }
  }
}
