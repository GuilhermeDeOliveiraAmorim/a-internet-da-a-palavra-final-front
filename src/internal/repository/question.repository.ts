import {
  CreateQuestionInputDTO,
  CreateQuestionOutputDTO,
} from "../usecases/create_question";
import {
  DeleteQuestionInputDTO,
  DeleteQuestionOutputDTO,
} from "../usecases/delete_question";
import {
  GetQuestionsInputDTO,
  GetQuestionsOutputDTO,
} from "../usecases/get_questions";
import {
  VoteQuestionInputDTO,
  VoteQuestionOutputDTO,
} from "../usecases/vote_question";

export interface QuestionRepository {
  createQuestion(
    input: CreateQuestionInputDTO
  ): Promise<CreateQuestionOutputDTO>;
  getQuestions(input: GetQuestionsInputDTO): Promise<GetQuestionsOutputDTO>;
  deleteQuestion(
    input: DeleteQuestionInputDTO
  ): Promise<DeleteQuestionOutputDTO>;
  voteQuestion(input: VoteQuestionInputDTO): Promise<VoteQuestionOutputDTO>;
}
