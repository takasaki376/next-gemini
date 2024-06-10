export interface IconSvgProps {
  size?: number;
  width?: number | string;
  height?: number | string;
  [key: string]: any; // Allow additional props
}

export type Location = {
  latitude: number;
  longitude: number;
};

export type GeminiParams = {
  month: string;
  date: string;
};

export type GeminiFormattedData = {
  title: string;
  desc: string;
  link: string;
};

export type OpenWeatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  };
};

export type GeminiData = {
  generatedText: string;
};
