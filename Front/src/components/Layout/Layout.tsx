import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <main className="w-full h-full ">
      <div className="w-full h-full  relative">
        <section className="">{children}</section>
      </div>
    </main>
  );
};
