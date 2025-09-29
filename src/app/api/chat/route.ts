// app/api/chat/route.ts
import { Mistral } from "@mistralai/mistralai";
import { NextResponse } from "next/server";

const client = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;
    const response = await client.chat.complete({
      model: "mistral-large-latest",
      messages,
    });

    const content = response.choices?.[0]?.message?.content || "No response";
    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
