export interface registerDataTypes {
  username: string;
  password: string;
  rePassword: string;
  acceptTerm: boolean;
}

export interface registerErrorTypes {
  usernameError: string | null;
  passwordError: string | null;
  acceptTermError: string | null;
}

export interface registerPanelTypes {
  registerFunction: () => void;
  setRegisterData: React.Dispatch<React.SetStateAction<registerDataTypes>>;
  registerData: registerDataTypes;
  registerError: registerErrorTypes;
}
