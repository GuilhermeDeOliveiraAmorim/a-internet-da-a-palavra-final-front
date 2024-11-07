import {
  DisplaysListQuestionsInputDTO,
  DisplaysListQuestionsOutputDTO,
} from "../presenters/displays_list_questions";
import {
  ShowResultQuestionInputDTO,
  ShowResultQuestionOutputDTO,
} from "../presenters/show_result_question";

export interface PresentersRepository {
  displaysListQuestions(
    input: DisplaysListQuestionsInputDTO
  ): Promise<DisplaysListQuestionsOutputDTO>;
  showResultQuestionOption(
    input: ShowResultQuestionInputDTO
  ): Promise<ShowResultQuestionOutputDTO>;
}
