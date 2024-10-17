import { useRef, useState } from "react";
import "./App.css";
import useChatMessage from "./hooks/useChatMessage";
import { fetchStrings } from "./store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { clearStrings } from "./store/actions/actions";

function App() {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  const { message, date } = useChatMessage(chatMessage);
  const messages = useSelector((state) => state.strings);

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (chatMessage) {
      dispatch(fetchStrings([...messages, { date: date, message: message }]));
      setChatMessage("");
      inputRef.current.value = "";
    }
  }
  const handleClearItems = () => {
    dispatch(clearStrings()); 
    console.log('1')
  }

  return (
    <div className="App">
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((el, index) => {
            return (
              <div key={index} className="message">
                <span>{el.date}</span>
                <p>{el.message}</p>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit} className="input-container">
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => {
              setChatMessage(e.target.value);
            }}
          />
          <button type="submit" className="send-btn">Send</button>
          <button type="button" className="clear-btn" onClick={handleClearItems}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
