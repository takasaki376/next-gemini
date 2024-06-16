import { GeminiParams } from "@/types";

export const getGeminiData = async (params: GeminiParams) => {
  const data = await fetch(
    `/api/gemini?month=${params.month}&date${params.date}`,
    { method: "POST" }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
