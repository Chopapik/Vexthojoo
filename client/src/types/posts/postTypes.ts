export interface postDataTypes {
  username: string;
  avatar: string;
  whenUpload: string;
  whatDevice: string;
  text: string;
  imagePath?: string;
}

export interface postTypes {
  index: number;
  postData: postDataTypes;
  postOpacity: boolean[];
}

export interface postContentDataTypes {
  text: string;
  image?: File;
}

export interface addPostPanelTypes {
  setPostContentData: React.Dispatch<
    React.SetStateAction<postContentDataTypes>
  >;
  postContentData: postContentDataTypes;
  addPostFunction: () => void;
  addPostError: string;
}
