"use client";

import { useState } from "react";
import ChatBox from "../components/ChatBox";
import InputBox from "../components/Input";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.content },
    ]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <ChatBox messages={messages} loading={loading} />
      <InputBox onSend={handleSend} loading={loading} />
    </div>
  );
}
