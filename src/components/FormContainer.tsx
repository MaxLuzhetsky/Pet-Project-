import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { Message, User } from '../types/types'
import { AppDispatch } from '../store/store';
import { clearStrings, fetchStrings } from '../store/actions/actions.ts';
import useSignUp from '../hooks/useSignUp.ts';
import useChatMessage from '../hooks/useChatMessage.ts';

 const FormContainer: React.FC = () => {
    const [chatMessage, setChatMessage] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();


  const { name, role } = useSignUp();
  const { message, date } = useChatMessage(chatMessage, name , role);

  const messages = useSelector((state: { rootReducer: { strings: Message[] } }) => state.rootReducer.strings);
  const user = useSelector((state: { userReducer: { user: User } }) => state.userReducer.user);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatMessage) {
      dispatch(
        fetchStrings([
          ...messages,
          { date: date, message: message, name: user.login || name },
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
  return (
    <div>
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
  )
}
export default FormContainer;
