"use client";
import React from "react";
import ChatForm from "./chat-form";
import { useChat } from "ai/react";

export default function ChatView() {
  const { input, handleInputChange, messages, handleSubmit } = useChat();

  return (
    <>
      <div className="flex flex-col overflow-y-auto p-2">
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === "user" ? "User: " : "AI: "}
            {message.content}
          </div>
        ))}
      </div>
      <div className="mt-auto p-2">
        <ChatForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          input={input}
        />
      </div>
    </>
  );
}
