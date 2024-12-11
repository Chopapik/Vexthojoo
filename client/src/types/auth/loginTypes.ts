export interface loginDataTypes {
  username: string;
  password: string;
  noLogout: boolean;
}

export interface loginPanelTypes {
  loginFunction: () => void;
  setLoginData: React.Dispatch<React.SetStateAction<loginDataTypes>>;
  loginData: loginDataTypes;
  loginError: string;
}
