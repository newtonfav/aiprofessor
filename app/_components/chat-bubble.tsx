import React from "react";
import BotIcon from "./bot-icon";
import { MemoizedReactMarkdown } from "./memoized-react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import Spinner from "./spinner";

interface ChatBubbleProps {
  role: string;
  content: string;
  isLoading: boolean;
}

export default function ChatBubble({
  role,
  content,
  isLoading,
}: ChatBubbleProps) {
  return (
    <div
      className={`p-2 w-9/12 ${role === "user" ? "self-end" : "self-start"}`}
    >
      {role === "user" ? (
        <UserBubble content={content} />
      ) : (
        <BotBubble content={content} isLoading={isLoading} />
      )}
    </div>
  );
}

function BotBubble({
  content,
  isLoading,
}: {
  content: string;
  isLoading: boolean;
}) {
  return (
    <div className="inline-flex items-end gap-1">
      <div>
        <BotIcon />
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-primary-100 border-[0.5px] rounded-tr-[0.8rem] rounded-t-[0.8rem] border-primary-10 p-3 text-wrap text-[0.8rem] overflow-x-auto">
          <MemoizedReactMarkdown remarkPlugins={[remarkGfm, remarkMath]}>
            {content}
          </MemoizedReactMarkdown>
        </div>
      )}
    </div>
  );
}

function UserBubble({ content }: { content: string }) {
  return (
    <div className="bg-primary-500 border-[0.5px] border-primary-10 rounded-tl-[0.8rem]  p-3 text-wrap text-[0.8rem] overflow-x-auto rounded-b-[0.8rem] text-primary-200">
      <span>{content}</span>
    </div>
  );
}
