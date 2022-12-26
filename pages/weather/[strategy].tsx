import { getCityList } from "@services/weather/cityList";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  cities: string[];
  strategy: "ssg" | "ssr" | "csr";
};

const StrategyPage = ({ cities, strategy }: Props) => {
  const router = useRouter();
  const [customCity, setCustomCity] = React.useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/weather/${strategy}/${customCity}`);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomCity(event.target.value);
  };

  return (
    <div className="mx-auto md:mt-8 lg:mt-16">
      <h1 className="text-center text-white font-dark font-mono text-4xl divide-x-2">
        Cities weather with {strategy.toUpperCase()} strategy
      </h1>
      <main className="mt-8">
        <ul className="space-y-1">
          {cities.map(city => (
            <li key={city} className="before:content-['▸'] text-xl capitalize">
              <Link href={`/weather/${strategy}/${city}`}>{city}</Link>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <label className="block mt-4 text-white font-mono font-bold text-2xl">
            Or search for a city:
            <input
              value={customCity}
              onChange={handleChange}
              className="block w-full mt-2 p-2 text-white font-mono font-bold text-2xl"
              type="text"
              placeholder="City name"
            />
          </label>
        </form>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const strategies = ["ssg", "ssr", "csr"];
  const paths = strategies.map(strategy => ({
    params: { strategy },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const strategy = (context.params!.strategy! as string).toLowerCase() as "ssg" | "ssr" | "csr";
  const cities = await getCityList();
  return {
    props: {
      cities,
      strategy,
    },
  };
};

export default StrategyPage;
