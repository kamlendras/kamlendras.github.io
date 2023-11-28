"use client";
import * as React from "react";
import Hire from "./components/hire";
import Contact from "./components/contact";
import Support from "./components/support";
import Portfolio from "./components/portfolio";
import Copyright from "./components/copyright";
export default function Page() {
  return (
    <>
      <Hire />
      <Contact />
      <Support />
      <Portfolio />
      <Copyright color="#ffffff" />
    </>
  );
}
