import React, { useRef, useState, FormEvent, ChangeEvent } from "react";
import "./App.css";
import useChatMessage from "./hooks/useChatMessage.ts";
import { fetchStrings, clearStrings, stringType } from "./store/actions/actions.ts";
import { useDispatch, useSelector } from "react-redux";
import useSignUp from "./hooks/useSignUp.ts";
import { AppDispatch } from "./store/store.ts";
import { Message } from "./store/reducers/stringReducer/stringReducer.ts";

function App() {
  const [chatMessage, setChatMessage] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const { dispName, signUp } = useSignUp(login, password);
  const { message, date } = useChatMessage(chatMessage, dispName);
  
  const messages = useSelector((state: { rootReducer: { strings:Message[]  }}) => state.rootReducer.strings);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(messages);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatMessage) {
      dispatch(
        fetchStrings([
          ...messages,
          { date: date, message: message, nickName: dispName },
        ])
      );
      setChatMessage("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

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
        <span>Login</span>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} />
      </label>
      <label>
        <span>Password</span>
        <input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
      </label>
      <button type="button" onClick={handleSignUp}>
        OK
      </button>
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((el, index) => (
            <div key={index} className="message">
              <span>{el.date} | </span>
              <span>{el.nickName}:</span>
              <p>{el.message}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="input-container">
          <input
            type="text"
            ref={inputRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setChatMessage(e.target.value)}
          />
          <button type="submit" className="send-btn">
            Send
          </button>
          <button
            type="button"
            className="clear-btn"
            onClick={handleClearItems}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
