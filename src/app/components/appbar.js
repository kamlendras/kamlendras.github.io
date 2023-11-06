"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Social from "./social";
import Link from "next/link";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ThemeProvider, createTheme } from "@mui/material/styles";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ThemeProvider theme={darkTheme}>
      <Typography variant="h6" sx={{ my: 2 }}>
      kamlendras
      </Typography>
      <Divider />
      <List>
        <Link href="#hire">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>Hire me</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="#contact">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>Contact me</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="#support">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>Support me</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="#portfolio">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>My Portfolio</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </ThemeProvider>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: {sm: "block" } }}
            >
              kamlendras
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link href="#hire">
                <Button sx={{ color: "#fff" }}>Hire Me</Button>
              </Link>
              <Link href="#contact">
                <Button sx={{ color: "#fff" }}>Contact Me</Button>
              </Link>
              <Link href="#support">
                <Button sx={{ color: "#fff" }}>Support Me</Button>
              </Link>
              <Link href="#portfolio">
                <Button sx={{ color: "#fff" }}>My Portfolio</Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Social />
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <nav>
        <SwipeableDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
