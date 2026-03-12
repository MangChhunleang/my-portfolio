import { GoogleGenAI } from '@google/genai';

// Determine the API key from environment
// DigitalOcean uses 'process.env.GEMINI_API_KEY'
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export const main = async (args) => {
  try {
    const userMessage = args.message || "Hello";
    // We expect the frontend to pass 'history' if we want real memory, but for a simple stateless bot we just use the system prompt.
    // DigitalOcean receives args parsed from JSON body for POST requests.
    
    // Use portfolio data if provided from the frontend, otherwise fallback to defaults
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

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
        }
    });

    return {
      body: {
        reply: response.text,
      },
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error(error);
    return {
      body: { error: error.message || 'Failed to process request' },
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};
