"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Hire from "./components/hire";
import Contact from "./components/contact";
import Support from "./components/support";
import Portfolio from "./components/portfolio";
import Copyright from "./components/copyright"
export default function Page() {
  return (
    <div className={styles.zindex}>
      <Hire />
      <Contact />
      <Support />
      <Portfolio />
      <Copyright color="#ffffff"/>
    </div>
  );
}
