// components/Message.tsx
"use client";

interface MessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function Message({ role, content }: MessageProps) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-5 py-3 rounded-2xl shadow-md text-sm leading-relaxed ${isUser
          ? "bg-blue-500 text-white rounded-br-none"
          : "bg-gray-200 text-gray-900 rounded-bl-none"
          }`}
      >
        {content}
      </div>
    </div>
  );
}
