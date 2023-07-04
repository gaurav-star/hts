export interface IUserSignUp {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }
  
  export interface IUserLogin {
    email: string;
    password: string;
  }
  
  export class AuthResponses {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}