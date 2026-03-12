import path from "path"
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { GoogleGenAI } from '@google/genai'

export default defineConfig(({ mode }) => {
  // Load env variables to get GEMINI_API_KEY
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'mock-digitalocean-function',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/chat' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', async () => {
                try {
                  const { message } = JSON.parse(body);
                  
                  if (!env.GEMINI_API_KEY) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: "Missing GEMINI_API_KEY in .env.local" }));
                    return;
                  }

                  const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
                  const systemInstruction = `You are a helpful, professional, and friendly AI assistant for Mang Chhunleang's portfolio site.
Your goal is to answer questions about Mang's experience, skills, and projects, and encourage users to contact him.
Mang is a Full-Stack Software Developer based in Phnom Penh (open to remote).
He specializes in Frontend Architecture, Full-Stack Product Development, Developer Tooling, AI Product Interfaces, and Performance Optimization.
Be concise. If they want to hire him or contact him directly, tell them his email: mcl.mangchhunleang@gmail.com or his Telegram: https://t.me/kevinsiuu.
NEVER invent skills or experiences that are not typical for a developer with this background. Be polite and helpful.`;

                  const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: message,
                    config: {
                        systemInstruction: systemInstruction,
                        temperature: 0.7,
                    }
                  });

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ reply: response.text }));
                } catch (error) {
                  console.error(error);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: error instanceof Error ? error.message : "Failed to generate AI response" }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
})
