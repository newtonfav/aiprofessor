"use client";
import React from "react";
import Send from "./send";
import Microphone from "./microphone";
import { ChatRequestOptions } from "ai";

interface ChatFormProps {
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  input: string;
}

export default function ChatForm({
  handleInputChange,
  handleSubmit,
  input,
}: ChatFormProps) {
  return (
    <form
      className="shadow-even rounded-full justify-center flex items-center gap-2 py-1 px-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="prompt"
        value={input}
        onChange={handleInputChange}
        className="bg-primary-200 grow focus:outline-none active:outline-none focus-visible:outline-none p-1 text-[0.8rem]"
        placeholder="Hello AiProfessor?"
      />
      <Microphone />
      <button type="submit">
        <Send />
      </button>
    </form>
  );
}
