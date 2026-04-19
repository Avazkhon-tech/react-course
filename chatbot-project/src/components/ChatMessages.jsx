import {ChatMessage} from "./ChatMessage";
import {useEffect, useRef} from "react";

function ChatMessages({chatMessages}) {
    const chatMessagesRef = useRef();
    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages]);
    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        key={chatMessage.id}
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        time={chatMessage.time}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages;