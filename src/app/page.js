"use client";
import Link from "next/link";
import Image from "next/image";
import Social from "./components/social";
import styles from "./page.module.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const p = grey[900];
export default function Page() {
  return (
    <div>
      
      <AppBar position="fixed" className="zip" color="success">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            K Singh
          </Typography>
        
          <Social />
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
     
        {/* <div className={styles.description}>
          <p>
            <code className={styles.code}>K Singh</code>
          </p>

          <Social />
        </div> */}

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="./icon.svg"
            alt="ksingh"
            width={200}
            height={200}
            priority
          />
        </div>
<div className="zip">
        <div className={styles.grid}>
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
        </div>
        </div>
      </main>
      <ParticlesBackground className="particle" />
    </div>
  );
}
