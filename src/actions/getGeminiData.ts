import { GeminiParams } from "@/types";

export const getGeminiData = async (params: GeminiParams) => {
  const URL = process.env.NEXT_PUBLIC_APP_URL;
  const data = await fetch(
    `${URL}api/gemini?month=${params.month}&date${params.date}`,
    { method: "POST" }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
