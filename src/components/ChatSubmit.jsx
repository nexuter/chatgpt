import OpenAI from "openai";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

function ChatSubmit({ content, setContent, chatList, setChatList }) {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmitSend(e) {
    try {
      e.preventDefault();

      if (!content) return;

      setIsLoading(true);
      const qdate = new Date();
      var min =
        qdate.getMinutes < 10 ? "0" + qdate.getMinutes() : qdate.getMinutes();
      var qTime =
        qdate.getHours() > 12
          ? (qdate.getHours() % 12) + ":" + min + "PM"
          : qdate.getHours() + ":" + min + "AM";

      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });
      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: content }],
        model: "gpt-3.5-turbo",
      });

      const adate = new Date();
      min =
        adate.getMinutes < 10 ? "0" + adate.getMinutes() : adate.getMinutes();
      var aTime =
        adate.getHours() > 12
          ? (adate.getHours() % 12) + ":" + min + "PM"
          : adate.getHours() + ":" + min + "AM";
      setChatList([
        ...chatList,
        {
          question: content,
          question_timestamp: qTime,
          answer: response.choices[0].message.content,
          answer_timestamp: aTime,
        },
      ]);

      setIsLoading(false);
      setContent("");
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  return (
    <div className="h-16">
      <form
        className="h-full flex px-4 items-center justify-center"
        onSubmit={onSubmitSend}
      >
        <input
          className="grow py-1 px-2 mr-2 focus:outline-none rounded-lg shadow-md"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ask Me"
          disabled={isLoading}
        />
        <button
          className="w-24 py-[6px] text-sm bg-gray-100 rounded-lg shadow-md flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <CgSpinner className="animate-spin" size={22} />
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}

export default ChatSubmit;
