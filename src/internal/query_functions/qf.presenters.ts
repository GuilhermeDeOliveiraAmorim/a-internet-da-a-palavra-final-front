import { PresentersFactory } from "@/internal/factory/presenters.factory";
import {
  DisplaysListQuestionsInputDTO,
  DisplaysListQuestionsOutputDTO,
} from "../presenters/displays_list_questions";
import {
  ShowResultQuestionInputDTO,
  ShowResultQuestionOutputDTO,
} from "../presenters/show_result_question";

export const displaysListQuestions = async (
  input: DisplaysListQuestionsInputDTO
): Promise<DisplaysListQuestionsOutputDTO> => {
  try {
    const presentersFactory = new PresentersFactory();
    const getTotalExpensesForPeriodUseCase =
      presentersFactory.displaysListQuestionsUseCase();

    const response = await getTotalExpensesForPeriodUseCase.execute(input);

    return response;
  } catch (error) {
    throw error;
  }
};

export const showResultQuestionOption = async (
  input: ShowResultQuestionInputDTO
): Promise<ShowResultQuestionOutputDTO> => {
  try {
    const presentersFactory = new PresentersFactory();
    const showResultQuestionOptionUseCase =
      presentersFactory.showResultQuestionOptionUseCase();

    const response = await showResultQuestionOptionUseCase.execute(input);

    return response;
  } catch (error) {
    throw error;
  }
};
