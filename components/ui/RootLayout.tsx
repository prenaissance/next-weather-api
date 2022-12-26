import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <div className="flex flex-col flex-grow max-w-full">{children}</div>
      <footer className="max-w-full py-0.5 text-center bg-gray-600 ">
        Simple app to display the different rendering strategies in Next.js
        <span className="ml-16">
          <Link href="/" className="text-white font-bold">
            Home
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default RootLayout;
