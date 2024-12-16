export interface postDataTypes {
  username: string;
  avatarPath: string;
  whenUpload: string;
  whatDevice: string;
  text: string;
  imagePath?: string;
}

export interface postTypes {
  index: number;
  postData: postDataTypes;
  postOpacity: boolean[];
  enableOptions?: boolean;
}

export interface postContentDataTypes {
  text: string;
  image?: File;
}
