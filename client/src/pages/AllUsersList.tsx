import defaultAvatar from "../assets/images/defaultAvatar.png";
import useHandleAllUsersList from "../hooks/user/usehandleAllUsersList";

interface userData {
  username: string;
  avatarPath: string;
}
const AllUsersList = () => {
  const { usersData } = useHandleAllUsersList();
  return (
    <div className="flex-1 py-14 flex flex-col items-center space-y-14">
      <div>
        <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
          LYSTA UŻYTKOWNIKÓW
        </span>
        <hr className="border-neutral-500 w-3/4" />
      </div>
      <div className="w-full flex flex-wrap justify-center space-x-10">
        {usersData &&
          usersData.map((userData: userData) => (
            <div className="flex flex-col items-center">
              <a href={`/${userData.username}`}>
                <div className="w-[100px] h-[100px] border border-neutral-500">
                  <img
                    src={userData?.avatarPath || defaultAvatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <span className="text-white">{userData.username}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllUsersList;
