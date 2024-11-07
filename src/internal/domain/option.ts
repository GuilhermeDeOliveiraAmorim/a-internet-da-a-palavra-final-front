import { SharedEntity, SharedEntityInterface } from "./shared";

export interface OptionInterface extends SharedEntityInterface {
  questionId: string;
  text: string;
  icon: string;
  description: string;
  votes: number;
}

export class Option extends SharedEntity {
  questionId: string;
  text: string;
  icon: string;
  description: string;
  votes: number;

  constructor(
    id: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
    questionId: string,
    text: string,
    icon: string,
    description: string,
    votes: number,
    deactivatedAt: Date
  ) {
    super(id, active, createdAt, updatedAt, deactivatedAt);
    this.questionId = questionId;
    this.text = text;
    this.icon = icon;
    this.description = description;
    this.votes = votes;
  }
}
