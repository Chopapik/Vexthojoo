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

export interface postTypes {
  id: number;
  index: number;
  postData: postDataTypes;
  postOpacity: boolean[];
  //PostOpacity array contains opacity state for each post, which is used to control  the animation effect for displaying
  enableOptions?: boolean;
  deleteModeEnable?: boolean;
  updateModeEnable: boolean;
  handleDeleteModeEnable: (index: number) => void;
  handleDeletePost: (
    id: number,
    index: number,
    fetchPostsUsername: string //Variable is used to fetch only user's posts after post deletion
  ) => void;
  // "id" is the unique identifier in database
  // "index" is position of the post in the list
  toggleUpdateMode: (index: number) => void;
  handleSetNewPostContentData: ({
    newText,
    newImage,
  }: postContentToUpdateTypes) => void;
  handleUpdatePost: (postIdToUpdate: number, index: number) => void;
}

export interface postContentDataTypes {
  text: string;
  image?: File;
}

export interface postContentToUpdateTypes {
  newText?: string;
  newImage?: File;
}
