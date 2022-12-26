import WeatherCard from "@components/weather/WeatherCard";
import { getWeatherByCity, WeatherResponse } from "@services/weather/weatherByCity";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  weather: WeatherResponse;
};

const CityWeather = ({ weather }: Props) => {
  return (
    <div className="flex flex-1 flex-col m-y-[50%] mt-6 items-center text-center">
      <h1 className="text-transparent text-2xl font-mono font-bold bg-gradient-to-b from-sky-100 to-sky-200 bg-clip-text">
        Weather in {weather.name}
      </h1>
      <WeatherCard weather={weather} />
    </div>
  );
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
