"use client";
import { useState, useEffect, useRef } from "react";

const ChatBot: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const chatHistoryRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom of the chat history when it updates
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;  // Don't send empty messages

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const chatbotMessage = data.message || "Error: Unable to fetch response";  // Default error message if there's no response

      setChatHistory((prev) => [...prev, `You: ${message}`, `Bot: ${chatbotMessage}`]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl max-w-md mx-auto">
      <div
        ref={chatHistoryRef}
        className="h-80 overflow-y-auto border-b border-gray-600 mb-4 p-4 space-y-4"
      >
        {chatHistory.map((entry, index) => (
          <div key={index} className="flex flex-col space-y-2">
            {entry.startsWith("You:") ? (
              <div className="self-end bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                {entry}
              </div>
            ) : (
              <div className="self-start bg-gray-700 text-gray-300 rounded-lg p-3 max-w-xs">
                {entry}
              </div>
            )}
          </div>
        ))}
        {loading && <p className="italic text-gray-400">Loading...</p>}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me something..."
          className="flex-grow p-3 border border-gray-600 rounded-md mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
