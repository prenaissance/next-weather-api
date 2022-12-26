import WeatherCard from "@components/weather/WeatherCard";
import WeatherLayout from "@components/weather/WeatherLayout";
import { getWeatherByCity, WeatherResponse } from "@services/weather/weatherByCity";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CityWeather = () => {
  const router = useRouter();
  const { city } = router.query;
  const title = `Weather in ${city}`;
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    if (city) {
      getWeatherByCity(city as string).then(weather => setWeather(weather));
    }
  }, [city]);

  return <WeatherLayout title={title}>{weather && <WeatherCard weather={weather} />}</WeatherLayout>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { city } = context.query;

  const weather = await getWeatherByCity(city as string);
  return {
    props: {
      weather,
    },
  };
};

export default CityWeather;
