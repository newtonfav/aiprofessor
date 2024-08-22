import React from "react";
import ChatView from "../_components/chat-view";

export default function Chat() {
  return (
    <div className="justify-center flex items-center">
      <div className="bg-primary-200 border border-primary-500 rounded-[0.85rem] p-6 md:h-[80dvh] h-[78dvh] md:w-6/12 w-full flex flex-col">
        <ChatView />
      </div>
    </div>
  );
}
