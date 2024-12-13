export interface registerDataTypes {
  username: string;
  password: string;
  rePassword: string;
  acceptTerm: boolean;
}

export interface registerErrorTypes {
  usernameError?: string;
  passwordError?: string;
  acceptTermError?: string;
}
