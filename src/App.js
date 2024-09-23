import { useState } from "react";
import "./App.css";
import useChatMessage from "./hooks/useChatMessage";

function App() {
  const [chatMessage, setChatMessage] = useState("");
  const [messageArr, setMessageArr] = useState([]);

  const formatedMessage = useChatMessage(chatMessage);

  function addMessage(message) {
    setMessageArr((prevMessage) => [...prevMessage, message]);
  }
  return (
    <div className="App">
      <div className="chat-container">
        <div>
          {messageArr.map((el) => (
            <span>{el}</span>
          ))}
        </div>
        <form>
          <input
            type="text"
            onChange={(e) => {
              setChatMessage(e.target.value);
            }}
          />
          <button type="submit" onClick={() => addMessage(formatedMessage)}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
