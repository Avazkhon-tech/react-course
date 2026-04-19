import {ChatInput} from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import React from "react";
import './App.css'


function App() {
    const [chatMessages, setChatMessages] = React.useState( () =>
        localStorage.getItem('chatMessages')
            ? JSON.parse(localStorage.getItem('chatMessages'))
            : []
    );

    React.useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(chatMessages))
    }, [chatMessages])

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
