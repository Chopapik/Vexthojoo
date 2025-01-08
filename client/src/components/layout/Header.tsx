import { useEffect, useState } from "react";
import { usePanelContext } from "../../context/PanelContext";
import Button01 from "../buttons/Button01";
import { useCookieAuthContext } from "../../context/CookieAuthContext";

import logo from "../../assets/images/logo.png";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
const Header = () => {
  const [loading, setLoading] = useState(true);

  const { getUser, authData } = useCookieAuthContext();

  const { showPanel } = usePanelContext();

  useEffect(() => {
    const checkUser = async () => {
      await getUser();
      setLoading(false);
    };
    checkUser();
  }, []);

  return (
    <div className="sticky top-0 bg-black flex flex-col items-center p-2 space-y-4 md:flex-row md:space-y-0 md:justify-between z-49">
      <a href="/">
        <div className="w-fit px-2 space-y-1">
          <img src={logo} alt="VEXTHOJOO" className="w-[250px]" />
          <hr className="w-3/4 border-fuchsia-500 border md:w-[125%]" />
        </div>
      </a>
      {!loading &&
        (authData.isLoggedIn ? (
          <a href={`/${authData.username}`}>
            <div className="w-fit flex space-x-5">
              <div className="flex flex-col text-xs">
                <span className="text-neutral-600">o siema</span>
                <span className="font-bold">{authData.username}</span>
              </div>
              <div className="w-9 h-9 border border-neutral-600">
                <img
                  src={
                    authData.avatarPath ? authData.avatarPath : defaultAvatar
                  }
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </a>
        ) : (
          <div className="flex space-x-4">
            <Button01
              color="fuchsia"
              shadowColor="fuchsia"
              onClick={() => showPanel("loginPanel")}
              content="LOGOWANIE"
            />
            <Button01
              color="black"
              shadowColor="fuchsia"
              border="border-2 border-fuchsia-600"
              onClick={() => showPanel("registerPanel")}
              content="REJESTRACA"
            />
          </div>
        ))}
    </div>
  );
};

//  <div className="bg-red-900 w-full flex">
//           <a href={`/${authData.username}`}>
//             <div className="flex flex-col">
//               <span className="text-neutral-600 text-xs">o siema</span>
//               <span className="text-white font-bold">
//                 {authData.username}
//                 authData.username
//               </span>
//             </div>

//             <div className="w-11 h-11 border border-neutral-600">
// <img
//   src={
//     authData.avatarPath ? authData.avatarPath : defaultAvatar
//   }
//   alt="Avatar"
//   className="object-cover w-full h-full"
// />
//             </div>
//           </a>
//         </div>

export default Header;
