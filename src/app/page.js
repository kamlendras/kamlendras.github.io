"use client";
import Link from "next/link";
import Image from "next/image";
import Social from "./components/social";
import styles from "./page.module.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { grey } from '@mui/material/colors';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typed from 'react-typed';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const p = grey[900];
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
export default function Page() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" className="zipp" color="primary">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            K Singh
          </Typography>
        
          <Social />
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      <main className={styles.main}>
     
      
    
            <Grid container spacing={2}className="meone"  align="center">

            <Grid item xs={12} md={6} lg={6} >
            <Typed
            className="typed"
                    strings={[
                      'Hi there.',
                      'I am maintainer of codnap and SFI.',
                      'I am full stack Web & Mobile developer.',
                      'I am know Nextjs.',
                      'I am know JavaScript.',
                      'I am know Material UI.',
                      'I am know Tailwind.'
                    ]}
                    typeSpeed={40}
                 backSpeed={50}
                 loop
                />
                

            </Grid>

            <Grid item xs={12} md={6} lg={3}>
            <Image
       className="zip"
            src="./icon.svg"
            alt="ksingh"
            width={200}
            height={200}
            priority
          />

            </Grid>

            </Grid>
         
       
        <Grid container spacing={2} className="zip">
        <Grid item xs={12} md={6} lg={3}>
        <Link href="/hire">
            <div
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                hire me <span>-&gt;</span>
              </h2>
              <p>Hire me from your favorite online freelancing website.</p>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={3} >
        <Link href="/contact">
        <div
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                contact me <span>-&gt;</span>
              </h2>
              <p>Send your Message to me :)</p>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Link href="/support">
            <div
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                support me <span>-&gt;</span>
              </h2>
              <p> Let's Together we make future open source.</p>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Link href="/portfolio">
            <div
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                portfolio <span>-&gt;</span>
              </h2>
              <p>Founder of codnap & SFI.</p>
            </div>
          </Link>
        </Grid>
      </Grid>
        
       
         
     
         
        
        
      </main>
      <ParticlesBackground className="particle" />
    </div>
  );
}
