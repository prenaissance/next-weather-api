import { getWeatherByCity, WeatherResponse } from "@services/weather/getWeatherByCity";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  weather: WeatherResponse;
}

const CityWeather = ({ weather }: Props) => {
  return (
    <div>{JSON.stringify(weather)}</div>
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