import { QuestionFactory } from "../factory/question.factory";
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

export const getQuestions = async (
  input: GetQuestionsInputDTO
): Promise<GetQuestionsOutputDTO> => {
  try {
    const categoryFactory = new QuestionFactory();
    const getQuestionsUseCase = categoryFactory.getQuestionsUseCase();

    const response = await getQuestionsUseCase.execute(input);

    return response;
  } catch (error) {
    throw error;
  }
};

export const createQuestion = async (
  input: CreateQuestionInputDTO
): Promise<CreateQuestionOutputDTO> => {
  try {
    const categoryFactory = new QuestionFactory();
    const createQuestionUseCase = categoryFactory.createQuestionUseCase();

    const response = await createQuestionUseCase.execute(input);

    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteQuestion = async (
  input: DeleteQuestionInputDTO
): Promise<DeleteQuestionOutputDTO> => {
  try {
    const categoryFactory = new QuestionFactory();
    const deleteQuestionUseCase = categoryFactory.deleteQuestionUseCase();

    const response = await deleteQuestionUseCase.execute(input);

    return response;
  } catch (error) {
    throw error;
  }
};

export const voteQuestion = async (
  input: VoteQuestionInputDTO
): Promise<VoteQuestionOutputDTO> => {
  try {
    const categoryFactory = new QuestionFactory();
    const voteQuestionUseCase = categoryFactory.voteQuestionUseCase();

    const response = await voteQuestionUseCase.execute(input);

    console.log("response", response);

    return response;
  } catch (error) {
    throw error;
  }
};
