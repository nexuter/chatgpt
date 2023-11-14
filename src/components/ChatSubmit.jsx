function ChatSubmit() {
  return (
    <div className="h-24">
      <form className="flex items-center justify-center">
        <input
          className="mt-6 ml-2 py-2 px-1 mr-2 w-full focus:outline-none rounded-md shadow-md"
          type="text"
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
