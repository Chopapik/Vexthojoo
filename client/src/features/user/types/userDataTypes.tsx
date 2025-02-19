export interface UserDataTypes {
  username: string;
  avatarPath?: string;
  whenLastLogged: string;
  whenRegist: string;
}
export interface newUserDataTypes {
  username: string | null;
  avatar: File | null;
}

export interface cookieUserDataTypes {
  username: string | null;
  avatarPath: string;
}
