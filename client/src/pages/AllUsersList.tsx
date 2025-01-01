import axios from "axios";
import { useEffect, useState } from "react";
import { UserDataTypes } from "../types/user/userDataTypes";

import defaultAvatar from "../assets/images/defaultAvatar.png";

const AllUsersList = () => {
  const [usersData, setUsersData] = useState<UserDataTypes[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("/user/allUsers");

      setUsersData(response.data.allUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex-1 py-14 flex flex-col items-center space-y-14">
      <div>
        <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
          LYSTA UŻYTKOWNIKÓW
        </span>
        <hr className="border-neutral-500 w-3/4" />
      </div>
      <div className="w-full flex flex-wrap justify-center space-x-10">
        {usersData.map((userData) => (
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] border border-neutral-500">
              <img
                src={userData?.avatarPath || defaultAvatar}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white">{userData.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsersList;
