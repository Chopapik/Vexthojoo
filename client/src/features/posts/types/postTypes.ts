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
  text: string;
  image?: File;
}

export interface postContentToUpdateTypes {
  newText?: string;
  newImage?: File;
}
