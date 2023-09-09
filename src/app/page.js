"use client"
import Link from 'next/link'
import Image from 'next/image'
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
import Social from './components/social'
import styles from './page.module.css'

export default function Page() {
  const particlesInit = async (main) => { 
    console.log(main); 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
    // starting from v2 you can add only the features you need reducing the bundle size 
    await loadFull(main); 
  }; 
  const particlesLoaded = (container) => { 
    console.log(container); }
  return (
    <main className={styles.main}>
  <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
          background: { 
            color: "rgb(10,10,25)", 
          }, 
          fpsLimit: 60, 
          particles: { 
            shape: { 
              type: "circle", 
            }, 
            size: { 
              random: { 
                enable: true, 
                minimumValue: 0.5, 
              }, 
              value: 1.4, 
            }, 
            color: { 
              value: "#f1f1f1", 
            }, 
            number: { 
              density: { 
                enable: true, 
                area: 1080, 
              }, 
              limit: 0, 
              value: 800, 
            }, 
            opacity: { 
              animation: { 
                enable: true, 
                minimumValue: 0.5, 
                speed: 1.6, 
                sync: false, 
              }, 
              random: { 
                enable: true, 
                minimumValue: 0.1, 
              }, 
              value: 1, 
            }, 
            interactivity: { 
              detectsOn: "canvas", 
              events: { 
                resize: true, 
              }, 
            }, 
          }, 
        }} 
      /> 
      <div className={styles.description}>
        <p>
          <code className={styles.code}>
            K Singh
         
          </code>
        </p>
        
        <Social/>
      </div>

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
          <p>Let's Together we make future open source.</p>
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
          <p>
           Founder of codnap & STREETSFOODS .
          </p>
        </div>
        </Link >
      </div>
    </main>
   );
  }
