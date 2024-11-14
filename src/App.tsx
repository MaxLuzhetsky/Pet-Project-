import React, { useRef, useState, FormEvent, ChangeEvent } from "react";
import "./App.css";
import useChatMessage from "./hooks/useChatMessage.ts";
import { fetchStrings, clearStrings } from "./store/actions/actions.ts";
import { useDispatch, useSelector } from "react-redux";
import useSignUp from "./hooks/useSignUp.ts";
import { AppDispatch } from "./store/store.ts";
import { Message, MessageType } from "./@types/types.ts";

function App() {
  const [chatMessage, setChatMessage] = useState<string>("");
  const [inputValues, setInputValues] = useState<{ login: string; password: string }>({
    login: '',
    password: '',
  });
  const dispatch = useDispatch<AppDispatch>();

  const { dispName, signUp , role } = useSignUp();
  const { message, date } = useChatMessage(chatMessage, dispName , role);

  const messages = useSelector((state: { rootReducer: { strings: Message[] } }) => state.rootReducer.strings);
  const inputRef = useRef<HTMLInputElement>(null);


  const inputProxy = new Proxy(inputValues, {
    set(target, prop: keyof typeof inputValues, value: string) {
      if (prop === 'login' && value.length < 3) {
        return true;
      }
      if (prop === 'password' && value.length < 6) {
        return true;
      }
      target[prop] = value;
      setInputValues({ ...target });
      return true;
    }
  });

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputProxy.login = e.target.value;
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputProxy.password = e.target.value;
  };

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

  const colorFunc = (role:MessageType) => {
    if(role === MessageType.ADMIN){
      return "red"
    }else if( role === MessageType.USER){
      return 'black'
    }else{
      return 'grey'
    }
    
  }

  const handleSignUp = () => {
    if (inputValues.login.length >= 3 && inputValues.password.length >= 6) {
      signUp(inputValues.login, inputValues.password);
    }
  };

  return (
    <div className="App">
      <label>
        <span>Login</span>
        <input type="text" onChange={handleLoginChange} />
      </label>
      <label>
        <span>Password</span>
        <input type="password" onChange={handlePasswordChange} />
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
              <p style={{color:colorFunc(role)}}>{el.message}</p>
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
