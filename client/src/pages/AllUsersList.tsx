import defaultAvatar from "../assets/images/defaultAvatar.png";
import useHandleAllUsersList from "../hooks/user/usehandleAllUsersList";

interface userData {
  username: string;
  avatarPath: string;
  whenRegist: string;
  whenLastLogged: string;
  numberOfPostByUser: string;
}

const LineComponent = () => {
  return <div className="h-6 w-[1px] bg-white " />;
};

const SpanComponent = ({ data }: { data: string }) => {
  return <span className="w-[200px] text-center">{data}</span>;
};

const LineComponentDark = () => {
  return <div className="h-6 w-[1px] bg-neutral-600 " />;
};
const AllUsersList = () => {
  const { usersData } = useHandleAllUsersList();
  return (
    <div className="flex-1 py-6 flex flex-col items-center space-y-6">
      <div>
        <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
          LYSTA UŻYTKOWNIKÓW
        </span>
        <hr className="border-neutral-500 w-3/4" />
      </div>
      <div className="w-full flex flex-col items-center space-y-2 bg-neutral-950 px-3 py-5 rounded-xl">
        <div className="w-[900px] h-[35px] font-extrabold text-neutral-600 text-sm mb-4 font-poppins bg-neutral-900 flex justify-center items-center rounded-full border-t border-neutral-700 ">
          <div className="w-[300px] text-center">nazwa</div>

          <LineComponentDark />
          <SpanComponent data="data rejestracji" />
          <LineComponentDark />
          <SpanComponent data="ostatio online" />
          <LineComponentDark />
          <SpanComponent data="liczba postów" />
        </div>
        {usersData?.map((userData: userData) => (
          <a href={userData.username}>
            <div className="w-[900px] h-[60px] bg-neutral-900 flex justify-center items-center rounded-full font-roboto border-t border-neutral-700 hover:bg-neutral-800">
              <div className="w-[300px] flex justify-center items-center space-x-2">
                <div className="w-10 h-10">
                  <img
                    src={userData.avatarPath || defaultAvatar}
                    alt={`${userData.username}'s avatar`}
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <span>{userData.username}</span>
              </div>
              <LineComponent />
              <SpanComponent data={userData.whenRegist} />
              <LineComponent />
              <SpanComponent data={userData.whenLastLogged} />
              <LineComponent />
              <SpanComponent data={userData.numberOfPostByUser} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllUsersList;
