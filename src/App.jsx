import ChatSubmit from "./components/ChatSubmit";
import ChatView from "./components/ChatView";
import ChatLog from "./components/ChatLog";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [chatList, setChatList] = useState([]);

  return (
    <div className="max-h-screen flex">
      <ChatLog chatList={chatList} />
      <div className="w-full h-full flex flex-col relative bg-yellow-100">
        <ChatView chatList={chatList} />
        <ChatSubmit
          content={content}
          setContent={setContent}
          chatList={chatList}
          setChatList={setChatList}
        />
      </div>
    </div>
  );
}

export default App;
