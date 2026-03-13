import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * DigitalOcean Functions entry point.
 * The platform passes the parsed JSON request body as `args`.
 * Return value must be: { body, statusCode, headers }
 */
export const main = async (args) => {
  try {
    const userMessage = args.message || "Hello";
    const portfolio = args.portfolio;

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
- Highlights: ${portfolio.highlights.map(h => `${h.label}: ${h.value}`).join(", ")}
- Intro: ${portfolio.intro}
- Skills: ${Object.entries(portfolio.skills).map(([category, skills]) => `${category}: ${skills.join(", ")}`).join("; ")}
- Experience: ${portfolio.experience.map(e => `${e.role} at ${e.company} (${e.period}): ${e.summary}`).join(" | ")}
- Projects: ${portfolio.projects.map(p => `${p.title} (${p.category}): ${p.summary}`).join(" | ")}`;
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", 
      systemInstruction
    });

    const response = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: userMessage }] }],
      generationConfig: {
        temperature: 0.7,
      },
    });

    const replyText = response.response.text();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: { reply: replyText },
    };
  } catch (error) {
    console.error('[chatbot/chat] Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: { error: error.message || 'Failed to process request' },
    };
  }
};
