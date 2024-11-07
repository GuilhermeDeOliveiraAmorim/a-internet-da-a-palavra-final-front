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
    created_at: Date,
    updated_at: Date,
    text: string,
    icon: string,
    options: Option[],
    deactivated_at: Date
  ) {
    super(id, active, created_at, updated_at, deactivated_at);
    this.text = text;
    this.icon = icon;
    this.options = options;
  }
}
