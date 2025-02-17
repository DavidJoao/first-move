import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST (req, res) {
    const { data } = await req.json();

    const token = process.env.AI_TOKEN;
    const client = new OpenAI({ 
        baseURL:"https://models.inference.ai.azure.com",
        apiKey: token,
    })

    const response = await client.chat.completions.create({
        messages: [
          { role:"system", content: 
            `You are a helpful assistant that returns all the possible questions and answers in an normal interaction of the given scenario.
            Return them in both english and the language provided by the user. Before each question in english put "EQ:" and before each
            question in the provided language put "TQ:". Before each answer in English put "EA:" and before each answer in the provided language put "TA:".
            If there's multiple possible answers you can include them, is optional, in the same answer but separated with a "|" and two spaces between. 
            Return everyting in a JSON Object without any other text, ready to parse, each question named question1, question2 and successively. Only 20 questions.
            Make sure to include commas after each question or answer to ensure a valid json parsing. If the information provided has nothing to do with our mission, 
            return the word "error", just that.` },
          { role:"user", content: 
            `I am going to ${data.scenario} and they speak in ${data.language}, I want to know the typical questions and answers in this interaction before I go`
           }
        ],
        model: "gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
      });

      const cleanedJSON = response.choices[0].message.content.replace(/^```json\s*/, '').replace(/\s*```.*$/, '').trim();
      const parsedData = JSON.parse(cleanedJSON);
      const mappedArray = Object.values(parsedData).map(value => {
          return {
              ...value,
          };
      });

    try {
        return NextResponse.json({ data: mappedArray }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}