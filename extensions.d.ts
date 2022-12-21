declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_OPEN_WEATHER_API_KEY: string;
    }
  }
}