export interface postDataTypes {
  id: number;
  username: string;
  avatarPath: string;
  whenUpload: string;
  whatDevice: string;
  text: string;
  imagePath?: string;
  isEdited: boolean;
}

export interface postContentDataTypes {
  text?: string;
  ascii?: string;
  ytVideoLink?: string;
  imagePath?: string;
}
