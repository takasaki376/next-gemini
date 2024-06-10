"use client";

import { title } from "@/components/primitives";
import { fontHeader } from "@/config/fonts";
import CardItem from "@/components/carditem";
import WeatherIcon from "@/components/weathericon";
import { GeminiParams } from "@/types";
import {
  formattedDate,
  formattedDateDate,
  formattedDateMonth,
} from "@/utils/format";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const params: GeminiParams = {
    month: formattedDateMonth(currentDate),
    date: formattedDateDate(currentDate),
  };

  return (
    <section className="flex flex-col items-center gap-4 py-5 md:py-5">
      <div>
        <WeatherIcon />
      </div>
      <div
        className={`${fontHeader.className} inline-block max-w-lg text-center justify-center`}
      >
        <h1 className={title({ class: "mt-2" })}>
          {formattedDate(currentDate)}
        </h1>
      </div>
      <div>
        <CardItem params={params} />
      </div>
    </section>
  );
}
