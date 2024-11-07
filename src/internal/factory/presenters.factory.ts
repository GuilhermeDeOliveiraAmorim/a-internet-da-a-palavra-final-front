import { PresentersGateway } from "../gateway/presenters.gateway";
import { DisplaysListQuestionsUseCase } from "../presenters/displays_list_questions";
import { ShowResultQuestionOptionUseCase } from "../presenters/show_result_question";
import { http } from "../util/http";

export class PresentersFactory {
  presentersGateway = new PresentersGateway(http);

  displaysListQuestionsUseCase() {
    return new DisplaysListQuestionsUseCase(this.presentersGateway);
  }

  showResultQuestionOptionUseCase() {
    return new ShowResultQuestionOptionUseCase(this.presentersGateway);
  }
}
