import { useRef, useState } from "react";
import "./App.css";
import useChatMessage from "./hooks/useChatMessage";
import { fetchStrings } from "./store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { clearStrings } from "./store/actions/actions";
import useSignUp from "./hooks/useSignUp";

function App() {
  const [chatMessage, setChatMessage] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { dispName, signUp } = useSignUp(login, password);
  const { message, date } = useChatMessage(chatMessage, dispName);
  const messages = useSelector((state) => state.rootReducer.strings);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (chatMessage) {
      dispatch(
        fetchStrings([
          ...messages,
          { date: date, message: message, nickName: dispName },
        ])
      );
      setChatMessage("");
      inputRef.current.value = "";
    }
  }
  const handleClearItems = () => {
    dispatch(clearStrings());
  };

  const handleSignUp = () => {
    if (login && password) {
      signUp(login, password);
    }
  };

  return (
    <div className="App">
      <label>
        <span>login</span>
        <input type="text" onChange={(e) => setLogin(e.target.value)} />
      </label>
      <label>
        <span>password</span>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSignUp}>
        ok
      </button>
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((el, index) => {
            return (
              <div key={index} className="message">
                <span>{el.date}|</span>
                <span>{el.nickName}:</span>
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
          <button type="submit" className="send-btn">
            Send
          </button>
          <button
            type="button"
            className="clear-btn"
            onClick={handleClearItems}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
