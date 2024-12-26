import deleteIcon from "../../../assets/icons/delete.svg";
import editIcon from "../../../assets/icons/edit.svg";
import yesIcon from "../../../assets/icons/yes.svg";
import noIcon from "../../../assets/icons/no.svg";

const PostOptionsButtons = ({
  id,
  index,
  deleteModeEnable,
  handleDeleteModeEnable,
  handleDeletePost,
}: {
  id: number;
  index: number;
  deleteModeEnable?: boolean;
  handleDeleteModeEnable: (index: number) => void;
  handleDeletePost: (id: number, index: number) => void;
}) => {
  return (
    <div className="flex h-7 space-x-2">
      {deleteModeEnable && (
        <div className="h-7 w-auto px-3 flex justify-center items-center bg-neutral-700">
          Czy na pewno usunąć post?
          <div className="flex ml-3 space-x-1 w-[50px]">
            <div className="flex justify-center items-center ">
              <img
                src={yesIcon}
                alt="yes"
                onClick={() => handleDeletePost(id, index)}
                className="hover:brightness-50"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={noIcon}
                alt="no"
                onClick={() => handleDeleteModeEnable(index)}
                className="hover:brightness-50"
              />
            </div>
          </div>
        </div>
      )}

      <div className="h-7 w-7 flex justify-center items-center bg-neutral-700 hover:bg-neutral-500 cursor-pointer">
        <img src={editIcon} alt="edit post" />
      </div>

      <div
        className="h-7 w-7 flex justify-center items-center bg-red-700 hover:bg-red-500 cursor-pointer"
        onClick={() => handleDeleteModeEnable(index)}
      >
        <img src={deleteIcon} alt="remove post" />
      </div>
    </div>
  );
};

export default PostOptionsButtons;
