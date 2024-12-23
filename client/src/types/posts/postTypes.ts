export interface postDataTypes {
  id: number;
  username: string;
  avatarPath: string;
  whenUpload: string;
  whatDevice: string;
  text: string;
  imagePath?: string;
}

export interface postTypes {
  id: number;
  index: number;
  postData: postDataTypes;
  postOpacity: boolean[];
  //postOpacity array contains opacity state for each post, which is used to control  the animation effect for displaying
  enableOptions?: boolean;
  deleteModeEnable?: boolean;
  handleDeleteModeEnable: (index: number) => void;
  handleDeletePost: (id: number, index: number) => void;
  // "id" is the unique identifier in database
  // "index" is position of the post in the list
}

export interface postContentDataTypes {
  text: string;
  image?: File;
}
