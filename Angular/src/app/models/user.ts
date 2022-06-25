export interface User {
  name: string;
  surname: string;
  username: string;
  email: string;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}
