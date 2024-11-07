import { Login } from "./login";
import { SharedEntity, SharedEntityInterface } from "./shared";

export interface UserInterface extends SharedEntityInterface {
  name: string;
  login: Login;
}

export class User extends SharedEntity {
  name: string;
  login: Login;

  constructor(
    id: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
    name: string,
    login: Login,
    deactivatedAt: Date
  ) {
    super(id, active, createdAt, updatedAt, deactivatedAt);
    this.name = name;
    this.login = login;
  }
}
