import * as fs from "fs/promises";
import path from "path";

export const getCityList = async (): Promise<string[]> => {
  const citiesPath = path.join(process.cwd(), "services", "weather", "cities.json");
  const str = await fs.readFile(citiesPath, "utf8");
  const cities = JSON.parse(str) as string[];
  return cities;
};
