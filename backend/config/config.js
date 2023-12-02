import OpenAI from 'openai';

export const PORT = 5555

export const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });
