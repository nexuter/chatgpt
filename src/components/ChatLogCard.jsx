import { useState } from "react";

function ChatLogCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClickOpenToggle() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
      <li className="mb-2" onClick={onClickOpenToggle}>
        {question}
      </li>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10">
          <div className="bg-white px-8 pt-10 pb-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
            <div className="w-full text-right pb-10 text-2xl">
              <button onClick={onClickOpenToggle}>x</button>
            </div>
            <div className="pb-8">Q. {question}</div>
            <div>A. {answer}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatLogCard;
