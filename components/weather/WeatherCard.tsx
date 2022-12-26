import React from "react";
import Image from "next/image";
import { WeatherResponse } from "@services/weather/weatherByCity";
import { BsWind, BsDroplet, BsArrowUp } from "react-icons/bs";

type Props = {
  weather: WeatherResponse;
};

const getWeatherIconUrl = (icon: string) => {
  return `http://openweathermap.org/img/w/${icon}.png`;
};

const WeatherCard = ({ weather }: Props) => {
  const currentWeather = weather.weather[0];
  return (
    <article className="max-w-[32rem] aspect-[3/2] grid grid-cols-3 grid-rows-3 justify-center items-center justify-items-center ring-2 bg-gray-500 ring-gray-100 rounded-lg">
      <h2 className="text-2xl text-center font-semibold text-gray-300 col-span-3 border-b-1">
        Right now in&nbsp;
        <span className="font-black underline">{weather.name}</span> the weather is: {currentWeather.description}
      </h2>
      <Image
        src={getWeatherIconUrl(currentWeather.icon)}
        crossOrigin="anonymous"
        alt="weather icon"
        width={64}
        height={64}
      />
      <section className="text-white text-center">
        <p className="text-4xl font-bold">{weather.main.temp}&nbsp;°C</p>
        <p className="text-sm font-medium">Feels like {weather.main.feels_like}&nbsp;°C</p>
      </section>
      <section className="text-white ease-in-out">
        <div className="flex items-center">
          <BsWind className="mr-1" />
          <p className="text-sm font-medium">{weather.wind.speed}&nbsp;m/s</p>
        </div>
        <div className="flex items-center">
          <BsArrowUp style={{ transform: `rotate(${weather.wind.deg}deg)` }} className="mr-1" />
          <p className="text-sm font-medium">{weather.wind.deg}&nbsp;°</p>
        </div>
        <div className="flex items-center">
          <BsDroplet className="mr-1" />
          <p className="text-sm font-medium">{weather.main.humidity}&nbsp;%</p>
        </div>
      </section>
      <section className="text-white text-center font-mono col-span-3 flex justify-evenly w-full">
        <p className="text-lg font-bold">Min: {weather.main.temp_min}&nbsp;°C</p>
        <p className="text-lg font-bold">Max: {weather.main.temp_max}&nbsp;°C</p>
      </section>
    </article>
  );
};

export default WeatherCard;
