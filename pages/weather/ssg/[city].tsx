import WeatherCard from "@components/weather/WeatherCard";
import WeatherLayout from "@components/weather/WeatherLayout";
import { getCityList } from "@services/weather/cityList";
import { getWeatherByCity, WeatherResponse } from "@services/weather/weatherByCity";
import { GetStaticProps, GetStaticPaths } from "next";
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

export const getStaticPaths: GetStaticPaths = async () => {
  const defaultCities = await getCityList();
  const paths = defaultCities.map(city => ({
    params: { city },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { city } = context.params as { city: string };

  const weather = await getWeatherByCity(city);
  return {
    props: {
      weather,
    },
    revalidate: 360,
  };
};

export default CityWeather;
