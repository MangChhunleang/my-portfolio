import path from "path"
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // Load env variables to get GEMINI_API_KEY for local dev only
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        // This plugin only runs in `vite dev` (dev server mode).
        // It mocks the DigitalOcean serverless function locally so you can
        // test the chatbot without deploying. In production (`vite build`),
        // configureServer is completely ignored.
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
                  const { message, portfolio } = JSON.parse(body);

                  if (!env.GEMINI_API_KEY) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: "Missing GEMINI_API_KEY in .env.local" }));
                    return;
                  }

                  // Dynamic import so @google/generative-ai is never bundled into
                  // the frontend and is only resolved at dev-server runtime.
                  const { GoogleGenerativeAI } = await import('@google/generative-ai');
                  const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

                  let systemInstruction = `You are a helpful, professional, and friendly AI assistant for Mang Chhunleang's portfolio site.
Your goal is to answer questions about Mang's experience, skills, and projects, and encourage users to contact him.
Mang is a Full-Stack Software Developer based in Phnom Penh (open to remote).
He specializes in Frontend Architecture, Full-Stack Product Development, Developer Tooling, AI Product Interfaces, and Performance Optimization.
Be concise. If they want to hire him or contact him directly, tell them his email: mcl.mangchhunleang@gmail.com or his Telegram: https://t.me/kevinsiuu.
NEVER invent skills or experiences that are not typical for a developer with this background. Be polite and helpful.`;

                  if (portfolio) {
                    systemInstruction = `You are a helpful, professional, and friendly AI assistant for ${portfolio.name}'s portfolio site.
Your goal is to answer questions about ${portfolio.name}'s experience, skills, and projects, and encourage users to contact him.
He is a ${portfolio.title} based in ${portfolio.location}.
He specializes in ${portfolio.specialties.join(", ")}.
Be concise. If they want to hire him or contact him directly, tell them his email: ${portfolio.email} or his Telegram: ${portfolio.social.telegram}.
NEVER invent skills or experiences that are not typical for a developer with this background. Be polite and helpful.

Context about him:
- Highlights: ${portfolio.highlights.map((h: { label: string; value: string }) => `${h.label}: ${h.value}`).join(", ")}
- Intro: ${portfolio.intro}
- Skills: ${Object.entries(portfolio.skills).map(([category, skills]) => `${category}: ${(skills as string[]).join(", ")}`).join("; ")}
- Experience: ${portfolio.experience.map((e: { role: string; company: string; period: string; summary: string }) => `${e.role} at ${e.company} (${e.period}): ${e.summary}`).join(" | ")}
- Projects: ${portfolio.projects.map((p: { title: string; category: string; summary: string }) => `${p.title} (${p.category}): ${p.summary}`).join(" | ")}`;
                  }

                  const model = genAI.getGenerativeModel({
                    model: "gemini-2.5-flash", 
                    systemInstruction
                  });

                  const response = await model.generateContent({
                    contents: [{ role: 'user', parts: [{ text: message }] }],
                    generationConfig: {
                      temperature: 0.7,
                    },
                  });

                  const replyText = response.response.text();

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ reply: replyText }));
                } catch (error) {
                  console.error('[mock-do-function] Error:', error);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    error: error instanceof Error ? error.message : "Failed to generate AI response"
                  }));
                }
              });
              return;
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
})
