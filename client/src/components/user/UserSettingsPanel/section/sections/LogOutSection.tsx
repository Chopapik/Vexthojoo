import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { ButtonFuchsiaLg } from "../../../../shared/buttons/ButtonLG/ButtonLG";
import useLogout from "../../../../../hooks/auth/useLogout";
import { usePanelContext } from "../../../../../context/PanelContext";

const LogOutSection = () => {
  const { handleLogout } = useLogout();
  const { closePanel } = usePanelContext();

  return (
    <Section
      content={
        <>
          <SectionTitle title="wylogowywanie" />

          <ButtonFuchsiaLg
            content="wyloguj mnie"
            onClick={() => {
              handleLogout();
              closePanel();
            }}
          />
        </>
      }
    />
  );
};

export default LogOutSection;
