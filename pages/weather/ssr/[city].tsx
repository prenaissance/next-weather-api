import WeatherCard from "@components/weather/WeatherCard";
import WeatherLayout from "@components/weather/WeatherLayout";
import { getWeatherByCity, WeatherResponse } from "@services/weather/weatherByCity";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  weather: WeatherResponse;
};

const CityWeather = ({ weather }: Props) => {
  return (
    <WeatherLayout title={`Weather in ${weather.name}`}>
      <WeatherCard weather={weather} />
    </WeatherLayout>
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
