import Link from "next/link";
import React from "react";

const RenderingCard = ({ children, bgColor }: { children: React.ReactNode; bgColor: string }) => {
  return (
    <div
      className="flex flex-col justify-center items-center p-4 rounded-lg outline outline-1 outline-white text-center text-white font-mono font-bold text-2xl aspect-video hover:animate-pulse"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div className="md:mt-4 lg:mt-12 xl:mt-24">
      <h1 className="text-center text-white font-dark font-mono text-4xl divide-x-2">
        Weather app with rendering strategies
      </h1>
      <main className="grid grid-cols-3 max-w-screen-sm mx-auto mt-8 space-x-2">
        <Link href="/weather/ssg">
          <RenderingCard bgColor="#48bb78">SSG (ISG)</RenderingCard>
        </Link>
        <Link href="/weather/ssr">
          <RenderingCard bgColor="#f56565">SSR</RenderingCard>
        </Link>
        <Link href="/weather/csr">
          <RenderingCard bgColor="#4299e1">CSR</RenderingCard>
        </Link>
      </main>
    </div>
  );
};

export default Home;
