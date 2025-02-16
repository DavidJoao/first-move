import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST (req, res) {
    const { data } = await req.json();
    const text = `Look up when is ideal to go to ${data.arrival} from ${data.departure} for ${data.duration} for ${data.partyNo} person/people if I want to save money in flights and hotels, include a list with prices of 5 cheapest hotels in thise specific dates, and 5 hotels that have better reviews for those same dates, also include average of money spent by day for food, if there's more than one person make sure to look up rooms for that amount of people and when you give me the average divide the price for each person, include the minimun I have to save per week for minimun flights, hotel and food until the date you give me comes, and send me all the data in JSON object. if there's a note, make a property named "note". Note: ${data.note}. Answer with the object, only properties, no more.`

    const token = process.env.AI_TOKEN;
    const client = new OpenAI({ 
        baseURL:"https://models.inference.ai.azure.com",
        apiKey: token,
    })

    const response = await client.chat.completions.create({
        messages: [
          { role:"system", content: "" },
          { role:"user", content: text }
        ],
        model: "gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
      });

    try {
        return NextResponse.json({ data: response.choices[0].message.content }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}