import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore1 from "../store";
import { useUserData } from "../store/slice/globalStates";
import axios from "axios";
import Storage from "../utils/storage";
import { StreamChat } from "stream-chat";

export const Login = () => {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const setUserId = useStore1((state) => state.setUserId);
  const navigate = useNavigate();
  const storage = new Storage();

  // const connectToGlobalChannel = async () => {
  //   const user = {
  //     id,
  //     name: userName,
  //     image: `https://getstream.io/random_svg/?name=${userName}`,
  //   };

  //   const client = StreamChat.getInstance(process.env.REACT_APP_API_KEY);
  //   // const response = await client.upsertUser(user);
  //   // console.log(response);
  //   const channels = await client.queryChannels({});
  //   const globalChannelId = channels[0].data.id;
  //   console.log(globalChannelId);
  // };

  const loginHandler = async () => {
    storage.delete("chatToken");
    try {
      const { data } = await axios.post("http://localhost:5173/chat/getToken", {
        username: id,
      });
      console.log(data.token);
      storage.save("chatToken", data.token);
      setUserId(id);
      navigate("/chat");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h2>Please Login to Continue</h2>
      <div>
        <input
          type="text"
          placeholder="UserName"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="UserId"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
      </div>
      <button disabled={id === ""} onClick={loginHandler}>
        Continue
      </button>
    </div>
  );
};
