import { NextResponse } from "next/server";
import { OpenAI } from "openai"; // Import OpenAI SDK

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Ensure you are using the correct API key from .env
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    return NextResponse.json({ message: response.choices[0].message.content }, { status: 200 });
  } catch (error: any) {
    console.error("Error occurred:", error);

    if (error.response && error.response.status === 429) {
      return NextResponse.json(
        { error: 'API quota exceeded. Please check your usage or billing plan.' },
        { status: 429 }
      );
    }

    return NextResponse.json({ error: 'Unable to fetch response. Please try again later.' }, { status: 500 });
  }
}
