import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <main className="flex flex-col flex-grow max-w-full">{children}</main>
      <footer className="max-w-full py-0.5 text-center bg-gray-600 shadow-md shadow-white">Footer</footer>
    </div>
  );
};

export default RootLayout;
