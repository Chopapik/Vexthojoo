import SectionTitle from "../SectionTitle";
import UserAvatarWithButton from "../../../UserAvatarWithButton";
import useUpdateUserData from "../../../../hooks/useUpdateUserData";
import Section from "../Section";
import Input from "../Input";
import { ButtonFuchsiaSm } from "../../../../../../components/buttons/ButtonSM/ButtonSM";

import CameraIcon from "../../../../../../assets/icons/cameraIcon.svg?react";

const UserProfileSection = () => {
  const {
    avatarPreview,
    cookieUserData,
    canSave,
    handleUsernameChange,
    handleAvatarPreview,
    handleUserDataUpdate,
    queryError,
  } = useUpdateUserData();

  return (
    <Section
      error={queryError?.message}
      content={
        <>
          <SectionTitle title="twój awatar" />
          <UserAvatarWithButton
            avatarPath={avatarPreview || cookieUserData.avatarPath}
            username={cookieUserData.username!}
            icon={<CameraIcon />}
            enableButton={true}
            enableFileInput={true}
            inputOnChangeFunction={(e) => handleAvatarPreview(e)}
          />
          <SectionTitle title="twoja nazwa" />
          <Input
            placeholder={cookieUserData.username!}
            onChange={(e) => handleUsernameChange(e)}
          />
          <div className="flex flex-col items-center w-[250px] space-y-4">
            <ButtonFuchsiaSm
              content="zapisz"
              disableButton={!canSave}
              onClick={handleUserDataUpdate}
            />
          </div>
        </>
      }
    />
  );
};

export default UserProfileSection;
