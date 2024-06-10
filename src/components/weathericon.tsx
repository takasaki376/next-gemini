"use client";

import { getOpenWeatherData } from "@/actions/getOpenWeatherData";
import { Location, OpenWeatherData } from "@/types";
import { useEffect, useState } from "react";
import { Image, Spinner } from "@nextui-org/react";

export default function WeatherIcon() {
  const [location, setLocation] = useState<Location | undefined>(undefined);
  const [iconURL, setIconURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    if (location) {
      getOpenWeatherData({ location })
        .then((data: OpenWeatherData) => {
          const url = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
          setIconURL(url);
        })
        .catch((error) => {
          console.log("An Error occurred:", error);
        });
    }
  }, [location]);

  return (
    <div>
      {iconURL ? (
        <Image alt="Weather Icon" src={iconURL} isZoomed />
      ) : (
        <Spinner color="secondary" />
      )}
    </div>
  );
}
