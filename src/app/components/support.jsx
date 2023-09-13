"use client";
import dragon from "./dragon.json";
import Lottie from "lottie-react";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import MLink from "@mui/material/Link";
import styles from "../styles/support.module.css";
import Grid from "@mui/material/Grid";
import Toolbar from '@mui/material/Toolbar';
const style = {
  width: 800,
};
export default function Types() {
  return (
<div id="support">
<Toolbar/>
    <div className={styles.one}>
      
      <Typography variant="h4"color="white" gutterBottom>
        Get Involved
      </Typography>

      <Typography variant="body1" color="white" gutterBottom>
        There are several methords by which you can support me , Whether you have
        ideas, translations, design changes, code cleaning, or real heavy code
        changes, help is always welcome. The more is done the better it gets! If
        you're interested in contributing, you can browse the issues or create a
        new one to discuss your feature idea. Every contribution is very
        welcome. You can contribute to one of my originations
        <MLink href="https://github.com/codnap" underline="always">
          {" "}
          github.com/codnap{" "}
        </MLink>{" "}
        and
        <MLink href="https://github.com/streetsfoods" underline="always">
          {" "}
          github.com/streetsfoods
        </MLink>{" "}
        .
      </Typography>

      <Typography variant="h4" color="white" gutterBottom>
        Join Matrix Rooms
      </Typography>
      <Typography color="white" variant="body1" gutterBottom>
        You can join matrix chat rooms of{" "}
        <MLink href="https://matrix.to/#/#codnap:matrix.org" underline="always">
          {" "}
          #codnap.matrix.org{" "}
        </MLink>{" "}
        <br />
        You can join matrix chat rooms of{" "}
        <MLink href="https://matrix.to/#/#SFI:matrix.org" underline="always">
          {" "}
          #SFI.matrix.org{" "}
        </MLink>
      </Typography>
      <Typography variant="h4" color="white" gutterBottom>
        Join Mastodon
      </Typography>
      <Typography color="white" variant="body1" gutterBottom>
        You can join mastodon page of{" "}
        <MLink href="https://fosstodon.org/@codnap" underline="always">
          {" "}
          @codnap@fosstodon.org{" "}
        </MLink>{" "}
        <br />
        You can join mastodon page of{" "}
        <MLink href="https://fosstodon.org/@SFI" underline="always">
          {" "}
          @SFI@fosstodon.org{" "}
        </MLink>
      </Typography>
      <Typography variant="h4" color="white" gutterBottom>
        Donate
      </Typography>

      <Typography variant="h6" color="white" gutterBottom>
        If you like this project, please consider donating so I can keep this
        project running forever!
      </Typography>

      <Grid container spacing={0}>
        <Grid item xs={12} md={12} lg={3.2}>
          <Link href="https://www.patreon.com/KSingh">
            <img
              src="/pat.png"
              height={80}
              width={'100%'}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Link href="https://www.buymeacoffee.com/ksingh">
            <img
              src="bmc.svg"
              height={80}
              width={'100%'}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={12} lg={3.8}>
          <Link href="https://liberapay.com/KSingh">
            <img
              src="https://img.shields.io/badge/liberapay-donate-yellow.svg?style=for-the-badge"
              height={80}
              width={'100%'}
            />
          </Link>
        </Grid>
      </Grid>

      {/* <Lottie animationData={dragon} loop={true} style={style} /> */}
      </div>
    </div>
  );
}
