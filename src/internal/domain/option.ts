import { SharedEntity, SharedEntityInterface } from "./shared";

export interface OptionInterface extends SharedEntityInterface {
  question_id: string;
  text: string;
  icon: string;
  description: string;
  votes: number;
}

export class Option extends SharedEntity {
  question_id: string;
  text: string;
  icon: string;
  description: string;
  votes: number;

  constructor(
    id: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
    text: string,
    icon: string,
    description: string,
    question_id: string,
    votes: number,
    deactivatedAt: Date
  ) {
    super(id, active, createdAt, updatedAt, deactivatedAt);
    this.question_id = question_id;
    this.text = text;
    this.icon = icon;
    this.description = description;
    this.question_id = question_id;
    this.votes = votes;
  }
}
