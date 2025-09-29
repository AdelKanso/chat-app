"use client";

import { useEffect, useRef } from "react";
import Message from "./Message";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBox({
  messages,
  loading,
}: {
  messages: ChatMessage[];
  loading: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto bg-white px-6 py-6 space-y-5">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500 text-lg">
          Hello, this is a demo of Mistral AI chat.
        </div>
      ) : (
        <>
          {messages.map((msg, idx) => (
            <Message key={idx} role={msg.role} content={msg.content} />
          ))}

          {loading && (
            <div className="text-gray-500 italic animate-pulse">
              Mistral is typing...
            </div>
          )}
        </>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
