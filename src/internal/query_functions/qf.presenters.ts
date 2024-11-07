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
    const displaysListQuestionsUseCase =
      presentersFactory.displaysListQuestionsUseCase();

    const response = await displaysListQuestionsUseCase.execute(input);

    return response;
  } catch (error) {
    throw error;
  }
};

export const showResultQuestion = async (
  input: ShowResultQuestionInputDTO
): Promise<ShowResultQuestionOutputDTO> => {
  try {
    const presentersFactory = new PresentersFactory();
    const showResultQuestionUseCase =
      presentersFactory.showResultQuestionUseCase();

    const response = await showResultQuestionUseCase.execute(input);

    return response;
  } catch (error) {
    throw error;
  }
};
