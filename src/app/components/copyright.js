"use client";
import React  from "react";
import Typography from "@mui/material/Typography";
import Linkmui from "@mui/material/Link";

function Copy() {
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      {" AGPL-3.0 LICENSED "}
      <Linkmui color="#ffffff" href="https://ksingh.is-a.dev/">
        kamlendras
      </Linkmui>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copy;

