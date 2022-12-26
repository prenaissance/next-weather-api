import * as fs from "fs/promises";

export const getCityList = async (): Promise<string[]> => {
  const str = await fs.readFile("cities.json", "utf8");
  const cities = JSON.parse(str) as string[];
  return cities;
};
