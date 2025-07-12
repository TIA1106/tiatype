import { NextResponse } from 'next/server';
import { ChatOpenAI } from "@langchain/openai";

export async function POST(req) {
  try {
    const { input } = await req.json();

    const model = new ChatOpenAI({
      temperature: 0.3,
      modelName: 'mistralai/mistral-7b-instruct', // or try 'meta-llama/llama-3-8b-instruct'
      openAIApiKey: process.env.OPENROUTER_API_KEY,
      configuration: {
        baseURL: 'https://openrouter.ai/api/v1',
        defaultHeaders: {
          'HTTP-Referer': 'http://localhost:3000',  // for free usage compliance
          'X-Title': 'TiaType Grammar Fixer'
        }
      }
    });

    const messages = [
      {
        role: 'system',
        content: 'const prompt = `Fix the grammar, spelling, and tone of the following text. Only return the corrected version. Do not explain anything.\n\n"${input}"`;',
      },
      {
        role: 'user',
        content: input,
      }
    ];

    const result = await model.invoke(messages);
    return NextResponse.json({ fixed: result.content });

  } catch (err) {
    console.error('Grammar Fix Error:', err);
    return NextResponse.json({ error: 'Grammar fixing failed' }, { status: 500 });
  }
}


