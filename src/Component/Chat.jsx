import { useState } from "react";
import "./Chat.css"; 

function ChatApp() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("Student"); 
  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: user }]); 
      setInput("");
    }
  };
  const toggleUser = () => {
    setUser((prevUser) => (prevUser === "Student" ? "Teacher" : "Student"));
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "Student" ? "student-message" : "teacher-message"}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>

      <button onClick={toggleUser} className="toggle-button">
        Switch to {user === "Student" ? "Teacher" : "Student"} 
      </button>
    </div>
  );
}

export default ChatApp;
