import axios from "axios";
import OpenAI from "openai";
import { useState } from "react";

function ChatSubmit({ content, setContent, chatList, setChatList }) {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmitSend(e) {
    try {
      e.preventDefault();

      if (!content) return;

      setIsLoading(true);

      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });
      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: content }],
        model: "gpt-3.5-turbo",
      });

      setChatList([
        ...chatList,
        {
          question: content,
          answer: response.choices[0].message.content,
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
    <div className="h-24">
      <form
        className="flex items-center justify-center absolute bottom-0 w-full"
        onSubmit={onSubmitSend}
      >
        <input
          className="mt-6 ml-2 py-2 px-1 mr-2 w-full focus:outline-none rounded-md shadow-md"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ask Me"
          disabled={isLoading}
        />
        <input
          className="mt-6 w-20 ml-2 py-2 px-1 bg-gray-100 rounded-md shadow-md"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

export default ChatSubmit;
