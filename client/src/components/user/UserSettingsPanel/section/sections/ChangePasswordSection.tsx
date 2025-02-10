import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Input from "../Input";
import { ButtonFuchsiaSm } from "../../../../shared/buttons/ButtonSM/ButtonSM";
import useUpdateUserPassword from "../../../../../hooks/user/useUpdateUserPassword";

const ChangePasswordSectionSubSection = ({
  content,
}: {
  content: React.ReactNode;
}) => {
  return (
    <div className="w-fit font-poppins text-xs space-y-2 flex flex-col items-start">
      {content}
    </div>
  );
};

const ChangePasswordSection = () => {
  const {
    handleNewPasswordChange,
    handleNewPasswordRepeatedChange,
    handleOldPasswordChange,
    handleUpdateUserPassword,
    queryError,
  } = useUpdateUserPassword();

  return (
    <Section
      error={queryError?.message}
      content={
        <>
          <SectionTitle title="zmień hasło" />
          <ChangePasswordSectionSubSection
            content={
              <>
                <span>wpisz nowe hasło</span>
                <Input
                  placeholder="nowe hasło"
                  onChange={handleNewPasswordChange}
                />
                <span>powtórz nowe hasło</span>
                <Input
                  placeholder="powtórz nowe hasło"
                  onChange={handleNewPasswordRepeatedChange}
                />
              </>
            }
          />
          <ChangePasswordSectionSubSection
            content={
              <>
                <span>wpisz stare hasło</span>
                <Input
                  placeholder="stare hasło"
                  onChange={handleOldPasswordChange}
                />
              </>
            }
          />
          <ButtonFuchsiaSm
            content="zapisz"
            onClick={handleUpdateUserPassword}
            disableButton={false}
          />
        </>
      }
    />
  );
};

export default ChangePasswordSection;
