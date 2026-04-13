import {ChatInput} from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import React from "react";
import './App.css'


function App() {
    const [chatMessages, setChatMessages] = React.useState([
        {
            id: crypto.randomUUID(),
            message: "Hello, ChatBot!",
            sender: "user"
        },
        {
            id: crypto.randomUUID(),
            message: "Hello! How can I help you?",
            sender: "robot"
        },
        {
            id: crypto.randomUUID(),
            message: "can you get me todays date?",
            sender: "user"
        },
        {
            id: crypto.randomUUID(),
            message: "Today is April 11",
            sender: "robot"
        }
    ]);

    return (
        <div className="app-container">
            <ChatMessages
                chatMessages={chatMessages}
            />

            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />

        </div>
    )
}

export default App
