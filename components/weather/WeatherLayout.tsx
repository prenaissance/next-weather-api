import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const WeatherLayout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-1 flex-col m-y-[50%] mt-6 items-center text-center">
        <h1 className="text-transparent text-2xl font-mono font-bold bg-gradient-to-b from-sky-100 to-sky-200 bg-clip-text">
          {title}
        </h1>
        {children}
      </div>
    </>
  );
};

export default WeatherLayout;
