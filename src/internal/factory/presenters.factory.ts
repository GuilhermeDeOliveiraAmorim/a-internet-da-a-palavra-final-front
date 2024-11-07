import { PresentersGateway } from "../gateway/presenters.gateway";
import { DisplaysListQuestionsUseCase } from "../presenters/displays_list_questions";
import { ShowResultQuestionUseCase } from "../presenters/show_result_question";
import { http } from "../util/http";

export class PresentersFactory {
  presentersGateway = new PresentersGateway(http);

  displaysListQuestionsUseCase() {
    return new DisplaysListQuestionsUseCase(this.presentersGateway);
  }

  showResultQuestionUseCase() {
    return new ShowResultQuestionUseCase(this.presentersGateway);
  }
}
