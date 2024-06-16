import { Location } from "@/types";

export const getOpenWeatherData = async ({
  location,
}: {
  location: Location;
}) => {
  if (!location) {
    throw new Error("Location is not defined");
  }

  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const data = await fetch(
    `/api/openweather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
