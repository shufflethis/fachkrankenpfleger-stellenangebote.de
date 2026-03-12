import { GoogleGenAI } from "@google/genai";

const FALLBACK_MESSAGE = "Der KI-Assistent ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.";

export const generateJobDescription = async (
  title: string,
  requirements: string,
  benefits: string
): Promise<string> => {
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) return FALLBACK_MESSAGE;

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const model = 'gemini-2.5-flash';
    const prompt = `
      Erstelle eine professionelle, SEO-optimierte Stellenanzeige für einen Fachkrankenpfleger (m/w/d).
      
      Stellentitel: ${title}
      Anforderungen: ${requirements}
      Vorteile/Benefits: ${benefits}
      
      Anweisungen:
      1. Nutze eine ansprechende, professionelle Sprache.
      2. Strukturiere den Text mit Markdown (Fettgedrucktes, Listen).
      3. Optimiere für Keywords wie "Intensivpflege", "Anästhesie", "OP-Pflege", "Fachkraft".
      4. Füge einen Abschnitt hinzu, warum diese Stelle besonders attraktiv ist.
      5. Der Text soll direkt Arbeitnehmer ansprechen.
      
      Antworte nur mit dem Inhalt der Stellenanzeige im Markdown-Format.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Es konnte keine Beschreibung generiert werden.";
  } catch (error) {
    console.error("Error generating job description:", error);
    return FALLBACK_MESSAGE;
  }
};