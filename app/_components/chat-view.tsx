"use client";
import React from "react";
import ChatForm from "./chat-form";
import { useChat } from "ai/react";
import ChatBubble from "./chat-bubble";
import Spinner from "./spinner";

export default function ChatView() {
  const { input, handleInputChange, messages, handleSubmit, isLoading } =
    useChat();

  return (
    <>
      <div className="flex flex-col overflow-y-auto p-2">
        {messages.map((message, index) => (
          <ChatBubble
            role={message.role}
            content={message.content}
            key={message.id}
            isLoading={isLoading && index === messages.length - 1}
          />
        ))}
        {isLoading && <ChatBubble role="bot" content="" isLoading={true} />}
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
