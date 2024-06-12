"use client";
import * as React from "react";
import { CssVarsProvider, useColorScheme,extendTheme  } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
const customTheme = extendTheme({
  typography: {
    h1: {
      // `--joy` is the default CSS variable prefix.
      // If you have a custom prefix, you have to use it instead.
      // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
      background:
        'linear-gradient(-30deg, var(--joy-palette-primary-800), var(--joy-palette-primary-400))',
      // `Webkit*` properties must come later.
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
});


function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
      sx={{
        position: "fixed",
        zIndex: 999,
        top: "1rem",
        right: "1rem",
        borderRadius: "50%",
        boxShadow: "sm",
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function TeamExample() {
  return (
    <CssVarsProvider theme={customTheme}>
      <CssBaseline />
      <ColorSchemeToggle />
      <Box
        sx={{
          m: 16,
        }}
      >
        <Typography  level="h1">Hello.</Typography>

        <Typography level="h3">My name is Kamlendra Singh.</Typography>

        <Typography level="body-lg">
          I am an independent software developer currently based in India. I am
          the creator of the{" "}
          <Link href="https://github.com/universal-org/OpenCryptoExchange">
            open crypto exchange
          </Link>
          ,{" "}
          <Link href="https://github.com/universal-org/fosstube">
            video sharing platform fosstube{" "}
          </Link>{" "}
          and the{" "}
          <Link href="https://github.com/universal-org/ueats-web">
            online food ordering platform ueats.
          </Link>{" "}
          Most of my work is open source and publicly available on{" "}
          <Link href="https://github.com/kamlendras">GitHub.</Link> If you
          happen to benefit from my OSS work, you can support me financially via{" "}
          <Link href="https://liberapay.com/kamlendras">Liberapay</Link>,  <Link href="https://patreon.com/kamlendras">Patreon</Link> or cryptocurrencies.
        </Typography>
        <br />
        <Typography level="body-lg">
        BTC: bc1q0arjq5h3sze75rckr80glxzjud3jvph5905qwh <br />
        ETH : 0x887BCbe94a50cCfcdf0257B76744E348103C5873 <br />
        LTC: ltc1quw8seq03ea4s2pu7ez2t2l459pjmn9pytsasay <br />
        XMR: 46ZKbR2NAVnjp6zqpbGLuEEKf4xjNYGLvfny2gsCSbznKd3krjHxJAzMBiXJt665iF44NBarc9wDt4YB77os61PJ9qNhKsK <br />
        DOGE: DKkVDBJYkos6ut5YBjP7zvc5xNq2CgNc3P 
        </Typography>
        <br/>
        <Typography level="body-lg">
          You can follow me on <Link href="https://www.linkedin.com/in/kamlendras/">LinkedIn</Link>,    <Link href="https://github.com/kamlendras">GitHub</Link>,   <Link href="https://fosstodon.org/@universal">masstodon </Link>.
        </Typography>
<br/>
        <Box>
          <div role="group" aria-labelledby="topping">
            <List
              orientation="horizontal"
              wrap
              sx={{
                "--List-gap": "8px",
                "--ListItem-radius": "20px",
              }}
            >
              {[
                "Nextjs",
                "MUI",
                "JOY UI",
                "React Native",
                "Paper",
                "Reactjs",
                "Figma",
                "GIMP",
                "Angluar",
                "material",
                "Linux",
                "Arch Linux",
                "Debian",
                "Nix OS",
                "Pop OS",
                "Ubuntu",
                "TypeScript",
                "JavaScript",
                "Android Studio",
                "BlockChain",
                "Monero",
                "Bitcoin",
                "Ethereum",
                "Tor",
                "Network security",
                "OPSEC",
              ].map((item, index) => (
                <ListItem key={item}>
                  <Checkbox
                    overlay
                    defaultChecked
                    disableIcon
                    variant="soft"
                    label={item}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
