function ChatView({ chatList }) {
  return (
    <div className="flex flex-col justify-end h-screen">
      <ul className="p-4 text-sm overflow-y-auto">
        {chatList &&
          chatList.map((v, i) => (
            <li key={i} className="flex flex-col">
              <div className="bg-yellow-200 self-end mt-2 mb-1 p-2 rounded-md shadow-md">
                {v.question}
              </div>
              <div className="text-gray-300 text-sm self-end">
                {v.question_timestamp}
              </div>
              <div className="bg-gray-50 p-2 rounded-md mt-2 mb-1 shadow-md">
                {v.answer}
              </div>
              <div className="text-gray-300 text-sm">{v.answer_timestamp}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ChatView;
