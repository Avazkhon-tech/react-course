import React, {useState} from "react";
import {Chatbot} from "supersimpledev";
import './ChatInput.css'


export function ChatInput({chatMessages, setChatMessages}) {

    const [inputText, setInputText] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (inputText === '' || isLoading) {
            return;
        }

        const userMessage = {
            id: crypto.randomUUID(),
            message: inputText,
            sender: "user",
            time: Date.now()
        };

        const loadingMessage = {
            id: crypto.randomUUID(),
            message: 'loading',
            sender: "robot",
            time: Date.now()
        };

        setInputText('');
        setIsLoading(true);

        setChatMessages(prev => [...prev, userMessage, loadingMessage]);

        const response = await Chatbot.getResponseAsync(inputText);

        const botMessage = {
            id: crypto.randomUUID(),
            message: response,
            sender: "robot",
            time: Date.now()
        };

        setChatMessages(prev => [
            ...prev.filter(msg => msg.message !== 'loading'),
            botMessage
        ]);

        setIsLoading(false);
    }

    function handleKey(event) {
        if (event.key === "Enter") {
            sendMessage()
        } else if (event.key === "Escape") {
            resetMessage()
        }
    }

    function resetMessage() {
        setInputText('')
    }

    function handleClear() {
        setChatMessages([])
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to ChatBot"
                size="30"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={handleKey}
                className="chat-input"
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send
            </button>

            <button
                onClick={handleClear}
                className="clear-button"
            >Clear
            </button>
        </div>
    );
}
