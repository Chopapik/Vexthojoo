export interface postDataTypes {
  username: string;
  avatar: string;
  whenUpload: string;
  whatDevice: string;
  TEXT: string;
  imagePath: string | null;
}

export interface postTypes {
  index: number;
  postData: postDataTypes;
  postOpacity: boolean[];
}
