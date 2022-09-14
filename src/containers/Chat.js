import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Channel, Chat,Window,ChannelHeader, MessageList, MessageInput, Thread, LoadingIndicator,ChannelList, darkModeTheme } from 'stream-chat-react';
import "stream-chat-react/dist/css/index.css"
import useStore1 from '../store';
import { useUserData } from '../store/slice/globalStates';
import { user } from '../utils/userDetails';
export const RevirtChat = () =>{
    const [client,setClient] = useState(null)
    const id = useStore1(state=>state.userId)
    useEffect(()=>{
      async function init(){
      const chatClient = StreamChat.getInstance(process.env.REACT_APP_API_KEY);
      await chatClient.connectUser(user,chatClient.devToken(id))
      const filters = { type: 'messaging', members: { $in: [id] } }
      const channel = await chatClient.queryChannels(filters);
      channel[0].on('message.new', (e) => {
      if(e.message.user.id == user.id) return;
      const audio = new Audio(process.env.REACT_APP_TEST_AUDIO_URL);
      audio.play();})
    setClient(chatClient)
    }
    init()

    if(client) return ()=>client.disconnectUser()
    },[])
    
    const filters = { type: 'messaging', members: { $in: [id] } }
     if(!client) return <LoadingIndicator/>
    return(
        <Chat client={client}  darkMode={darkModeTheme}>
        <ChannelList  filters={filters}/>
        <Channel >
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    )
  }