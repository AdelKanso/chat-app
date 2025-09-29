"use client";

import { useState } from "react";

interface InputProps {
  onSend: (message: string) => void;
  loading: boolean;
}

export default function Input({ onSend, loading }: InputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim() || loading) return;
    onSend(text.trim());
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-gray-100 px-8 py-6 border-t">
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={loading}
          className="flex-1 rounded-full border px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="rounded-full bg-blue-500 px-8 py-4 text-white font-semibold shadow hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
