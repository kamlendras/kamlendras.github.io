"use client";
import React  from "react";
import Typography from "@mui/material/Typography";
import Linkmui from "@mui/material/Link";

function Copy() {
  return (
    <Typography variant="body2"  align="center">
      {"Copyright © "}
      <Linkmui color="inherit" href="https://ksingh.is-a.dev/">
        ksingh
      </Linkmui>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copy;

