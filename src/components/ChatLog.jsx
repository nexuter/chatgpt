import ChatLogCard from "./ChatLogCard.jsx";

function ChatLog({ chatList }) {
  return (
    <div className="min-h-screen w-1/4 bg-gray-100">
      <ul className="p-2">
        {chatList &&
          chatList.map((v, i) => (
            <ChatLogCard key={i} question={v.question} answer={v.answer} />
          ))}
      </ul>
    </div>
  );
}

export default ChatLog;
