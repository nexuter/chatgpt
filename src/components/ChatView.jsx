function ChatView({ chatList }) {
  return (
    <div className="flex flex-col justify-end h-screen bg-pink-100">
      <ul className="max-h-screen text-xs overflow-y-auto">
        {chatList &&
          chatList.map((v, i) => (
            <li key={i} className="flex flex-col gap-4">
              <div className="bg-yellow-200 self-end  mr-2 p-2 rounded-md">
                {v.question}
              </div>
              <div className="bg-gray-50 ml-2 p-2 rounded-md w-fit">
                {v.answer}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ChatView;
