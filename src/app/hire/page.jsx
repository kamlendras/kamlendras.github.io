"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Linkmui from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import Lottie from "lottie-react";
import oct from "./oct.json";
const style = {
  height: 300,
};
function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Linkmui color="inherit" href="https://ksingh.is-a.dev/">
        ksingh
      </Linkmui>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Hire Me
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The Best Dev On The Planet.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              "As after viewing my Portfolio if ur still not hireing me then ur
              in Big Loss..." ~ ksingh
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="#hirenow">
                <Button variant="contained">Hire NOW</Button>
              </Link>

              <Button variant="outlined">GIVE FEEDBACK</Button>
            </Stack>
          </Container>
        </Box>
        <div id="hirenow">
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Link href="https://www.freelancer.com/u/ksinghofficial">
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "40.25%",
                      }}
                      image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcustomercarecontacts.com%2Fwp-content%2Fuploads%2F2017%2F07%2Ffreelancer-logo.jpg&f=1&nofb=1&ipt=a46861a67f5bab20a0261300d1cd8817b9916618fed7cf745bc6aa8c95d5729b&ipo=images"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Freelancer.
                      </Typography>
                      <Typography>I'm available on freelancer.</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Hire Me</Button>
                      {/* <Button size="small">Chat With Me</Button> */}
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Link href="https://www.fiverr.com/officialksingh">
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "40.25%",
                      }}
                      image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnpm-assets.fiverrcdn.com%2Fassets%2Flayout%2Ffiverr-og-logo.99c4dbf.png&f=1&nofb=1&ipt=82f0966a0a5f703bb603911e3e1be70908326b78149dc8151164dd1170fee4cb&ipo=images"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Fiverr.
                      </Typography>
                      <Typography>I'm available on Fiverr.</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Hire Me</Button>
                      {/* <Button size="small">Chat With Me</Button> */}
                    </CardActions>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Link href="https://www.upwork.com/freelancers/~012f635da79c04b0f1">
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F04%2FUpwork-Symbol.png&f=1&nofb=1&ipt=e1f5bc3fb57a6e3da870c0c8d51be63256901555085ac82858810efb7b9a2944&ipo=images"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        UpWork
                      </Typography>
                      <Typography>I'm available on UpWork.</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Hire Me</Button>
                      {/* <Button size="small">Chat With Me</Button> */}
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Lottie animationData={oct} loop={true} style={style} />
      </main>

      <Copyright style={{ colour: "#ffffff" }} />
    </ThemeProvider>
  );
}
