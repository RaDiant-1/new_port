import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Note: In a real deployment, ensure process.env.API_KEY is set. 
// For this demo, we assume the environment is correctly configured.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Consults the Grimoire (Gemini) for wisdom.
 * This function uses a specific system instruction to maintain the medieval persona.
 */
export const consultGrimoire = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: "You are an ancient, sentient Grimoire of Code and Alchemy. You speak in a wise, slightly archaic neo-classical tone (thee, thou, 'tis), but you are helpful and concise. You explain technical concepts using magical metaphors. If asked about the portfolio owner, praise their dual mastery of Logic (Code) and Chaos (Creativity). Keep responses under 100 words unless asked for a tale.",
        temperature: 0.8,
      }
    });

    return response.text || "The pages are blank... the spirits are silent.";
  } catch (error) {
    console.error("Grimoire Error:", error);
    return "A dark fog obscures the knowledge you seek. (API Error)";
  }
};