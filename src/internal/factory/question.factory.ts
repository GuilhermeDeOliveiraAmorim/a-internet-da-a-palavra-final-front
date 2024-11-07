import { QuestionGateway } from "../gateway/question.gateway";
import { CreateQuestionUseCase } from "../usecases/create_question";
import { DeleteQuestionUseCase } from "../usecases/delete_question";
import { GetQuestionsUseCase } from "../usecases/get_questions";
import { VoteQuestionUseCase } from "../usecases/vote_question";
import { http } from "../util/http";

export class QuestionFactory {
  questionGateway = new QuestionGateway(http);

  createQuestionUseCase() {
    return new CreateQuestionUseCase(this.questionGateway);
  }

  getQuestionsUseCase() {
    return new GetQuestionsUseCase(this.questionGateway);
  }

  deleteQuestionUseCase() {
    return new DeleteQuestionUseCase(this.questionGateway);
  }

  voteQuestionUseCase() {
    return new VoteQuestionUseCase(this.questionGateway);
  }
}
