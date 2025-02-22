import { ButtonNeutralXs } from "../buttons/ButtonXS/ButtonXS";

import upIcon from "../../assets/icons/upIcon.svg";
import moreIcon from "../../assets/icons/moreIcon.svg";
import useMobileNavigatorPosition from "../../hooks/mobileNavigator/useMobileNavigatorPosition";

const MobileNavigator = ({
  upButtonFunction,
  moreButtonFunction,
}: {
  upButtonFunction?: () => void;
  moreButtonFunction?: () => void;
}) => {
  const { navigatorBottomPosition } = useMobileNavigatorPosition();

  return (
    <div
      className={`w-[calc(100vw-24px)] bg-[#0B0B0B] fixed ${navigatorBottomPosition} rounded-xl border-t border-[#171717] h-[38px] flex justify-center space-x-2 items-center lg:hidden transition-all ease-out duration-200`}
    >
      <ButtonNeutralXs
        imgPath={upIcon}
        imgAlt="do góry"
        onClick={upButtonFunction}
      />
      <ButtonNeutralXs
        imgPath={moreIcon}
        imgAlt="więcej"
        onClick={moreButtonFunction}
      />
    </div>
  );
};
export default MobileNavigator;
