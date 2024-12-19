import axios, { AxiosError } from "axios";

const cookieAuthService = async () => {
  try {
    const response = await axios.get("/cookieAuth/cookieLogin", {
      withCredentials: true,
    });

    const userData = {
      isLoggedIn: true,
      userid: response.data.userid,
      username: response.data.username,
      avatarPath: response.data.avatarPath,
    };

    return { userData };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.log(`Cookie login err: ${error.response.data.message}`);
      }
    }
  }
};

export default cookieAuthService;
