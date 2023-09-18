"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
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
import bluebird from "./bluebird.json";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import localFont from "next/font/local";
import Typed from "react-typed";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "900",
  subsets: ["latin"],
});
const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));
const theme = createTheme({
  typography: {
    fontSize: 25,
    lineHeight: 1.5,
    letterSpacing: 0.32,
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    h6: {
      fontWeight: 900,
    },
  },
});

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const style = {
  height: 300,
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme} id="hire" >
      <Toolbar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            // bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container
          // maxWidth="sm"
          >
            <ThemeProvider theme={theme}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                gutterBottom
                className={inter.className}
                sx={{
                  background:
                    "linear-gradient(to right bottom, #0d47a1, #00c853)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '7rem',
  },

                }}
              >
                The Best Dev On
                <br /> The Planet.
              </Typography>
            </ThemeProvider>
            <Typography
              variant="h5"
              align="center"
              color="white"
              paragraph
              sx={{
                background:
                  "linear-gradient(to right bottom, #9e9e9e, #9e9e9e)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              <div>
                <Typed
                  strings={[
                    "Maintainer of codefoss and Ueats.",
                    "I know JavaScript.",
                    "I know TypeScript.",
                    "I know Reactjs.",
                    "I know Nextjs.",
                    "I know Material UI.",
                    "I know React Native.",
                    "I know Expo.",
                    "I know Paper.",
                    "I know Arch Linux.",
                    "I know Nix OS.",
                    "I know Debian 12.",
                    "I know Sway.",
                    "I know i3.",
                    "I know dwm.",
                    "I know awesome.",
                  ]}
                  typeSpeed={40}
                  loop
                />
                <br />
              </div>
            </Typography>
          </Container>
        </Box>
        <div className="twobu">
          <centre>
            <Link href="#hirenow">
              <div class="buttons">
                <button class="btn-hover color-1">HIRE NOW</button>
              </div>
            </Link>

            <button
              class="glow-on-hover"
              onClick={handleClickOpen}
              type="button"
            >
              GIVE FEEDBACK
            </button>
          </centre>
        </div>

        <div id="hirenow">
          <Toolbar />
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Link href="https://www.freelancer.com/u/ksinghofficial">
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "40.25%",
                      }}
                      image="./freelancer.jpg"
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
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "40.25%",
                      }}
                      image="./fiverr.jpg"
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
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "40%",
                      }}
                      image="./upwork.jpg"
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
      </main>
      <Link href="https://www.freelancer.com/u/ksinghofficial">
        <Lottie animationData={bluebird} loop={true} style={style} />
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"How was ur experience ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <StyledRating
              name="highlight-selected-only"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
