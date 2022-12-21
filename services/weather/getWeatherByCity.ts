export type GeoLocationResponse = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
  local_names: {
    ascii: string;
    en: string;
  }
}[];

export type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  },
  weather:
  {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[],
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  },
  wind: {
    speed: number;
    deg: number;
  }
};

export const getWeatherByCity = async (city: string): Promise<WeatherResponse> => {
  const result = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`)
    .then(res => res.json() as Promise<GeoLocationResponse>);
  const { lat, lon } = result[0];

  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`)
    .then(res => res.json() as Promise<WeatherResponse>);

  return weather;
};