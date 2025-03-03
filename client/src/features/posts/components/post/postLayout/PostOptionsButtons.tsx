import { useState } from "react";

import MoreIcon from "../../../../../assets/icons/moreIcon.svg?react";
import EditIcon from "../../../../../assets/icons/editIcon.svg?react";
import DeleteIcon from "../../../../../assets/icons/deleteIcon.svg?react";

import { ButtonRedXs } from "../../../../../components/buttons/ButtonXS/ButtonXS";
import { ButtonNeutralXs } from "../../../../../components/buttons/ButtonXS/ButtonXS";
import ConfirmButton from "./ConfirmButton";

const PostOptionsButtons = ({
  isEditModeActive,
  isDeleteModeActive,
  toggleEditMode,
  toggleDeleteMode,
  // enableEditMode,
  disableEditMode,
  // enableDeleteMode,
  disableDeleteMode,
  deletePost,
  updatePost,
}: {
  isEditModeActive: boolean;
  isDeleteModeActive: boolean;
  toggleEditMode: () => void;
  toggleDeleteMode: () => void;
  // enableEditMode: () => void;
  disableEditMode: () => void;
  // enableDeleteMode: () => void;
  disableDeleteMode: () => void;
  deletePost: () => void;
  updatePost: () => void;
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <>
      {showOptions ? (
        <div className="flex p-1 space-x-1 rounded-xl absolute bg-[#101010] right-2 top-2 items-center justify-center">
          {isEditModeActive && (
            <ConfirmButton
              question="zapisać?"
              confirmFunction={() => {
                updatePost();
                disableEditMode();
              }}
              declineFunction={disableEditMode}
            />
          )}
          {isDeleteModeActive && (
            <ConfirmButton
              question="usunąć?"
              confirmFunction={() => {
                deletePost();
                disableDeleteMode();
              }}
              declineFunction={disableDeleteMode}
            />
          )}

          <ButtonRedXs
            icon={<DeleteIcon />}
            onClick={() => {
              toggleDeleteMode();
              disableEditMode();
            }}
          />
          <ButtonNeutralXs
            icon={<EditIcon />}
            onClick={() => {
              toggleEditMode();
              disableDeleteMode();
            }}
          />
          <ButtonNeutralXs
            icon={<MoreIcon />}
            onClick={() => setShowOptions((prev) => !prev)}
          />
        </div>
      ) : (
        <div className="flex p-1 space-x-1 rounded-xl absolute right-2 top-2">
          <ButtonNeutralXs
            icon={<MoreIcon />}
            onClick={() => setShowOptions((prev) => !prev)}
          />
        </div>
      )}
    </>
  );
};

export default PostOptionsButtons;
