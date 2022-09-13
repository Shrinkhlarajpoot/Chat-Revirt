// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
// import { StreamChat } from 'stream-chat';
// import { Channel, Chat,Window,ChannelHeader, MessageList, MessageInput, Thread, LoadingIndicator,ChannelList } from 'stream-chat-react';
// import "stream-chat-react/dist/css/index.css"
// import { initialState } from 'stream-chat-react/dist/components/Channel/channelState';
// // import '@stream-io/@stream-io/stream-chat-css/dist/css/index.css';
// const darkModeTheme={
//   '--bg-gradient-end': 'purple',
//   '--bg-gradient-start': 'purple',
//   '--black': '#ffffff',
//   '--blue-alice': '#00193d',
//   '--border': '#141924',
//   '--button-background': 'red',
//   '--button-text': '#005fff',
//   '--grey': '#7a7a7a',
//   '--grey-gainsboro': '#2d2f2f',
//   '--grey-whisper': '#1c1e22',
//   '--modal-shadow': '#000000',
//   '--overlay': '#00000066',
//   '--overlay-dark': '#ffffffcc',
//   '--shadow-icon': '#00000080',
//   '--targetedMessageBackground': '#302d22',
//   '--transparent': 'transparent',
//   '--white': '#101418',
//   '--white-smoke': 'purple',
//   '--white-snow': '#070a0d',
// };
// const api_key = '7jq6u97pv9gf'
// const api_secret = "m3azp98x3e4dya5b5qtrt94da7xsbd8akjkcw6uj7q3krdkjtub5h7rckx3mnsv8"
// const user_id = 'hello123'
// const user = {
//   name:"hello",
//   id:"shrinkhla1",
 
// }
// const user2 = {
//   name:"hello123",
//   id:"hello123456",
// }

//   // { type: 'messaging', name: 'Social Demo', demo: 'social' };
// // Initialize a Server Client
// // cocreateToken(user_id);
// // console.log(token,"token")nst serverClient = StreamChat.getInstance( api_key, api_secret);
// // console.log(serverClient,"server client")
// // // Create User Token
// // const token = serverClient.

// // const CHANNEL_ID = "7jq6u97pv9gf"
// // const secretToken = "m3azp98x3e4dya5b5qtrt94da7xsbd8akjkcw6uj7q3krdkjtub5h7rckx3mnsv8"
// // const userId = "hello123"


// // const serverClient = StreamChat.getInstance(CHANNEL_ID,secretToken)
// // console.log(serverClient)
// // const token = serverClient.createToken(userId);
// // console.log(token,"asling for token")
// // const userToken = ""

// // const App = () => (
// //   // <Chat>
// //   // <Channel >
// //   //     <Window>
// //   //       <ChannelHeader />
// //   //       <MessageList />
// //   //       <MessageInput />
// //   //     </Window>
// //   //     <Thread/>
// //   //   </Channel>
// //   // </Chat>
// // );
// const customStyles = {
//   '--primary-color': 'purple',
//   '--md-font': '1.2rem',
//   '--xs-m': '1.2rem',
//   '--xs-p': '1.2rem',
// };

// const CustomChannelPreview = ()=>{
//   return(
//     <div>
//     <button>hello</button>
//     <span>X</span>
//     </div>
   
//   )
// }
// function App() {
//   const [client,setClient] = useState(null)
//   // const[channel,setChannel] = useState(null)
  
//   useEffect(()=>{
//     async function init(){
//       const chatClient = StreamChat.getInstance(api_key);
      
//       await chatClient.connectUser(user,chatClient.devToken(user.id))
//       // await chatClient.connectUser(user2,chatClient.devToken(user2.id))
//       //  chatClient.setGuestUser(user2)
//       const channel = chatClient.channel("messaging","Shrinkhla",{
//         name:"Shrinkhla",

//         members : [user.id,"Aryan1234"]
//       })
//       const channel2 = chatClient.channel("messaging","RevirtSpace",{
//         name:"RevirtSpace",

//         members : [user.id,"Aryan1234"]
//       })
//       await channel2.watch()
//       await channel.watch()
//       setClient(chatClient)
//       // setChannel(channel)
//     }
//   init()
//   if(client) return ()=>client.disconnectUser()
//   },[])
//   const CustomonChannelDeleted = ()=>{
//     console.log("channel deleted")
//   }
//   const filters = { type: 'messaging', members: { $in: [user.id] } }
 
//   if(!client) return <LoadingIndicator/>
//    return (
//     <Chat client={client} customStyles={darkModeTheme} >
//       <ChannelList filters={filters} Preview={CustomChannelPreview}/>
//     <Channel onChannelDeleted={CustomonChannelDeleted} >
//       <Window>
//         <ChannelHeader />
//         <MessageList />
//         <MessageInput />
//       </Window>
//       <Thread />
//     </Channel>
//   </Chat>
//   );
// }

// export default App;

import './App.css';
import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Channel, Chat,Window,ChannelHeader, MessageList, MessageInput, Thread, LoadingIndicator,ChannelList } from 'stream-chat-react';
import "stream-chat-react/dist/css/index.css"
import { initialState } from 'stream-chat-react/dist/components/Channel/channelState';
// import '@stream-io/@stream-io/stream-chat-css/dist/css/index.css';
const TEST_AUDIO_URL = "https://100ms.live/test-audio.wav"
const darkModeTheme={
  '--bg-gradient-end': 'purple',
  '--bg-gradient-start': 'purple',
  '--black': '#ffffff',
  '--blue-alice': '#00193d',
  '--border': '#141924',
  '--button-background': 'red',
  '--button-text': '#005fff',
  '--grey': '#7a7a7a',
  '--grey-gainsboro': '#2d2f2f',
  '--grey-whisper': '#1c1e22',
  '--modal-shadow': '#000000',
  '--overlay': '#00000066',
  '--overlay-dark': '#ffffffcc',
  '--shadow-icon': '#00000080',
  '--targetedMessageBackground': '#302d22',
  '--transparent': 'transparent',
  '--white': '#101418',
  '--white-smoke': 'purple',
  '--white-snow': '#070a0d',
};
const api_key = '7jq6u97pv9gf'
const api_secret = "m3azp98x3e4dya5b5qtrt94da7xsbd8akjkcw6uj7q3krdkjtub5h7rckx3mnsv8"
const user_id = 'hello123'
const user = {
  name:"aryan",
  id:"shrinkhla1",
 
}
const user2 = {
  name:"hello123",
  id:"hello123456",
}

  // { type: 'messaging', name: 'Social Demo', demo: 'social' };
// Initialize a Server Client
// cocreateToken(user_id);
// console.log(token,"token")nst serverClient = StreamChat.getInstance( api_key, api_secret);
// console.log(serverClient,"server client")
// // Create User Token
// const token = serverClient.

// const CHANNEL_ID = "7jq6u97pv9gf"
// const secretToken = "m3azp98x3e4dya5b5qtrt94da7xsbd8akjkcw6uj7q3krdkjtub5h7rckx3mnsv8"
// const userId = "hello123"


// const serverClient = StreamChat.getInstance(CHANNEL_ID,secretToken)
// console.log(serverClient)
// const token = serverClient.createToken(userId);
// console.log(token,"asling for token")
// const userToken = ""

// const App = () => (
//   // <Chat>
//   // <Channel >
//   //     <Window>
//   //       <ChannelHeader />
//   //       <MessageList />
//   //       <MessageInput />
//   //     </Window>
//   //     <Thread/>
//   //   </Channel>
//   // </Chat>
// );
const customStyles = {
  '--primary-color': 'purple',
  '--md-font': '1.2rem',
  '--xs-m': '1.2rem',
  '--xs-p': '1.2rem',
};

// function CustomChannelPreview (props) {
//   const {channel, setActiveChannel} = props;
//   const {messages} = channel.state;
//   const lastMessage = messages[messages.length - 1];

//   return (
//     <div>
//       <button
//         onClick={() => setActiveChannel(channel)}
//         style={{
//           margin: '12px'
//         }}
//       >
//         <div>{channel.data.name}</div>
//       </button>
//       <button onClick={() => handleChannelCreate}>+</button>
//       <button onClick={() => handleChannelUpdate(channel)}><span role="button">Upd</span></button>
//       <button onClick={()=>handleChannelDelete(channel)}>X</button>
//     </div>
//   )
// }

// const handleChannelCreate = async () => {
//   const channel = client.channel('messaging', 'travel', {
//     name: 'Awesome channel about traveling',
//     members: ['Aryan1234', 'Shrinkhla123'],
//   });
  // Here, 'travel' will be the channel ID
//   await channel.create();
//   await channel.watch();
// }

// const handleChannelUpdate = async (channel) => {
//   await channel.updatePartial({set: {name: 'Aryannn'}})
// }

// const handleChannelDelete = async (channel) => await channel.delete();

function App() {
  const [client,setClient] = useState(null)
  // const[channel,setChannel] = useState(null)
  
  useEffect(()=>{
    async function init(){
      const chatClient = StreamChat.getInstance(api_key);
      
      await chatClient.connectUser(user,chatClient.devToken(user.id))
      const filters = { type: 'messaging', members: { $in: [user.id] } }
const channel = await chatClient.queryChannels(filters);
console.log(channel[0], "CC")

 
  channel[0].on('message.new', (e) => {
    console.log(e, "EVENT");
    if(e.message.user.id == user.id) return;
    console.log("New message");
    const audio = new Audio(TEST_AUDIO_URL);
    audio.play();
})


      // await chatClient.connectUser(user2,chatClient.devToken(user2.id))
      //  chatClient.setGuestUser(user2)
      // const channel = chatClient.channel(
      //   "messaging",
      //   "Shrinkhla",{
      //   name:"Shrinkhla",
      //   members : [user.id]
      // })
      // const channel2 = chatClient.channel("livestream","react-demo2",{
      //   name:"React",

      //   members : [user.id]
      // })
      // // await channel2.watch()
      // await channel.watch()
      setClient(chatClient)
      // setChannel(channel)
    }
  init()
  if(client) return ()=>client.disconnectUser()
  },[])
  
  const filters = { type: 'messaging', members: { $in: [user.id] } }
 
  if(!client) return <LoadingIndicator/>
   return (
    <Chat client={client}  darkMode={darkModeTheme}>
    <div>
    <span>Create</span><span>Add new Chaneel</span><button></button>
    </div>
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
  );
}

export default App;
