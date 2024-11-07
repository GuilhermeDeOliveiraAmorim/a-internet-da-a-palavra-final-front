import { Option } from "./option";
import { SharedEntity, SharedEntityInterface } from "./shared";

export interface QuestionInterface extends SharedEntityInterface {
  text: string;
  icon: string;
  options: Option[];
}

export class Question extends SharedEntity {
  text: string;
  icon: string;
  options: Option[];

  constructor(
    id: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
    text: string,
    icon: string,
    options: Option[],
    deactivatedAt: Date
  ) {
    super(id, active, createdAt, updatedAt, deactivatedAt);
    this.text = text;
    this.icon = icon;
    this.options = options;
  }
}
