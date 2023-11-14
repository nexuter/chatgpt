import ChatSubmit from "./components/ChatSubmit";

function App() {
  return (
    <div className="min-h-screen flex">
      <div className="bg-yellow-100 w-1/4">Side</div>
      <div className="w-full flex flex-col">
        <div className="bg-pink-100 h-full">Main</div>
        <ChatSubmit />
      </div>
    </div>
  );
}

export default App;
