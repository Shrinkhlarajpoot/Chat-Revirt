import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Channel,
  Chat,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
  ChannelList,
  darkModeTheme,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import useStore1 from "../store";
import Storage from "../utils/storage";

export const RevirtChat = () => {
  const [client, setClient] = useState(null);
  const user = {
    id: useStore1((state) => state.userId),
  };
  const storage = new Storage();

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(process.env.REACT_APP_API_KEY);
      await chatClient.connectUser(user, storage.get("chatToken"));
      const filters = { type: "livestream", members: { $in: [user.id] } };

      const channel = await chatClient.queryChannels(filters);
      channel[0].on("message.new", (e) => {
        if (e.message.user.id === user.id) return;
        const audio = new Audio(process.env.REACT_APP_TEST_AUDIO_URL);
        audio.play();
      });

      setClient(chatClient);
    }
    init();

    if (client) return () => client.disconnectUser();
  }, []);

  const filters = { type: "livestream", members: { $in: [user.id] } };
  if (!client) return <LoadingIndicator />;
  return (
    <Chat client={client} darkMode={darkModeTheme}>
      <ChannelList filters={filters} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};
