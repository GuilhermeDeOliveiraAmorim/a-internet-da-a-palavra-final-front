export interface LoginInterface {
  email: string;
  password: string;
}

export class Login {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
