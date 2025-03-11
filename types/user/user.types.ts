export interface UserType {
  id: number;
  name: string;
  avatarPath?: string | null;
  email?: string;
  passwordHash: string;
  createdAt: Date;
  lastLogged: Date;
}

export interface UserFormDataType {
  name?: string;
  password?: string;
  avatarFile?: File;
  email: string;
}

// export interface
