import React from "react";
import { useSelector } from "react-redux";
import { Children, Message, MessageType } from "../types/types.ts";
import useSignUp from "../hooks/useSignUp.ts";

const ChatContainer: React.FC<Children> = ({ children }) => {
    const messages = useSelector((state: { rootReducer: { strings: Message[] } }) => state.rootReducer.strings);
    const { role } = useSignUp();

    const colorFunc = (role: MessageType) => {
        if (role === MessageType.ADMIN) {
            return "red"
        } else if (role === MessageType.USER) {
            return 'black'
        } else {
            return 'grey'
        }

    }
    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((el, index) => (
                    <div key={index} className="message">
                        <span>{el.date} | </span>
                        <span>{el.name}:</span>
                        <p style={{ color: colorFunc(role) }}>{el.message}</p>
                    </div>
                ))}
            </div>
            {children}
        </div>
    )
}

export default ChatContainer;
