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
    console.log(container);
  }
  return (
    <main className={styles.main}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={
          {
            autoPlay: true,
            background: {
              color: {
                value: "#fff"
              },
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#fff"
                },
                opacity: 1
              },
              enable: false
            },
            defaultThemes: {},
            delay: 0,
            fullScreen: {
              enable: true,
              zIndex: 1
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "push"
                },
                onDiv: {
                  selectors: "#repulse-div",
                  enable: false,
                  mode: "repulse",
                  type: "circle"
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10
                  }
                },
                resize: {
                  delay: 0.5,
                  enable: true
                }
              },
              modes: {
                trail: {
                  delay: 1,
                  pauseOnStop: false,
                  quantity: 1
                },
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1
                },
                bounce: {
                  distance: 200
                },
                bubble: {
                  distance: 400,
                  duration: 2,
                  mix: false,
                  opacity: 0.8,
                  size: 40,
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: {}
                  }
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5
                  },
                  radius: 60
                },
                grab: {
                  distance: 400,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1
                  }
                },
                push: {
                  default: true,
                  groups: {},
                  quantity: 4
                },
                remove: {
                  quantity: 2
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: {}
                  }
                },
                slow: {
                  factor: 3,
                  radius: 200
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: "#ffffff"
                      },
                      stop: {
                        value: "#000000"
                      }
                    },
                    radius: 1000
                  },
                  shadow: {
                    color: {
                      value: "#000000"
                    },
                    length: 2000
                  }
                }
              }
            },
            manualParticles: {},
            particles: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1
                  },
                  value: 1
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1
                  },
                  value: 1
                }
              },
              collisions: {
                absorb: {
                  speed: 2
                },
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1
                    },
                    value: 1
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1
                    },
                    value: 1
                  }
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0
                }
              },
              color: {
                value: "#ffffff",
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    delay: 0,
                    decay: 0,
                    sync: true
                  },
                  s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    delay: 0,
                    decay: 0,
                    sync: true
                  },
                  l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    delay: 0,
                    decay: 0,
                    sync: true
                  }
                }
              },
              groups: {},
              move: {
                angle: {
                  offset: 0,
                  value: 90
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50
                },
                path: {
                  clamp: true,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: 0
                  },
                  enable: false,
                  options: {}
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  righ: "out",
                  top: "out"
                },
                random: false,
                size: false,
                speed: 2,
                spin: {
                  acceleration: 0,
                  enable: false
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fill: {}
                },
                vibrate: false,
                warp: false
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080
                },
                limit: 0,
                value: 80
              },
              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.1
                },
                value: {
                  min: 0.1,
                  max: 1
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                  minimumValue: 0.2
                }
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: {
                  value: "#000"
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0
                }
              },
              shape: {
                loadShape: {},
                close: true,
                fill: true,
                options: {
                  character: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400"
                  },
                  char: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400"
                  },
                  polygon: {
                    sides: 5
                  },
                  star: {
                    sides: 5
                  },
                  image: {
                    0: {
                      src: "https://particles.js.org/images/fruits//apple.png",
                      width: 32,
                      height: 32
                    },
                    1: {
                      src: "https://particles.js.org/images/fruits//avocado.png",
                      width: 32,
                      height: 32
                    },
                    2: {
                      src: "https://particles.js.org/images/fruits//banana.png",
                      width: 32,
                      height: 32
                    },
                    3: {
                      src: "https://particles.js.org/images/fruits//berries.png",
                      width: 32,
                      height: 32
                    },
                    4: {
                      src: "https://particles.js.org/images/fruits//cherry.png",
                      width: 32,
                      height: 32
                    },
                    5: {
                      src: "https://particles.js.org/images/fruits//grapes.png",
                      width: 32,
                      height: 32
                    },
                    6: {
                      src: "https://particles.js.org/images/fruits//lemon.png",
                      width: 32,
                      height: 32
                    },
                    7: {
                      src: "https://particles.js.org/images/fruits//orange.png",
                      width: 32,
                      height: 32
                    },
                    8: {
                      src: "https://particles.js.org/images/fruits//peach.png",
                      width: 32,
                      height: 32
                    },
                    9: {
                      src: "https://particles.js.org/images/fruits//pear.png",
                      width: 32,
                      height: 32
                    },
                    10: {
                      src: "https://particles.js.org/images/fruits//pepper.png",
                      width: 32,
                      height: 32
                    },
                    11: {
                      src: "https://particles.js.org/images/fruits//plum.png",
                      width: 32,
                      height: 32
                    },
                    12: {
                      src: "https://particles.js.org/images/fruits//star.png",
                      width: 32,
                      height: 32
                    },
                    13: {
                      src: "https://particles.js.org/images/fruits//strawberry.png",
                      width: 32,
                      height: 32
                    },
                    14: {
                      src: "https://particles.js.org/images/fruits//watermelon.png",
                      width: 32,
                      height: 32
                    },
                    15: {
                      src: "https://particles.js.org/images/fruits//watermelon_slice.png",
                      width: 32,
                      height: 32
                    }
                  },
                  images: {
                    0: {
                      src: "https://particles.js.org/images/fruits//apple.png",
                      width: 32,
                      height: 32
                    },
                    1: {
                      src: "https://particles.js.org/images/fruits//avocado.png",
                      width: 32,
                      height: 32
                    },
                    2: {
                      src: "https://particles.js.org/images/fruits//banana.png",
                      width: 32,
                      height: 32
                    },
                    3: {
                      src: "https://particles.js.org/images/fruits//berries.png",
                      width: 32,
                      height: 32
                    },
                    4: {
                      src: "https://particles.js.org/images/fruits//cherry.png",
                      width: 32,
                      height: 32
                    },
                    5: {
                      src: "https://particles.js.org/images/fruits//grapes.png",
                      width: 32,
                      height: 32
                    },
                    6: {
                      src: "https://particles.js.org/images/fruits//lemon.png",
                      width: 32,
                      height: 32
                    },
                    7: {
                      src: "https://particles.js.org/images/fruits//orange.png",
                      width: 32,
                      height: 32
                    },
                    8: {
                      src: "https://particles.js.org/images/fruits//peach.png",
                      width: 32,
                      height: 32
                    },
                    9: {
                      src: "https://particles.js.org/images/fruits//pear.png",
                      width: 32,
                      height: 32
                    },
                    10: {
                      src: "https://particles.js.org/images/fruits//pepper.png",
                      width: 32,
                      height: 32
                    },
                    11: {
                      src: "https://particles.js.org/images/fruits//plum.png",
                      width: 32,
                      height: 32
                    },
                    12: {
                      src: "https://particles.js.org/images/fruits//star.png",
                      width: 32,
                      height: 32
                    },
                    13: {
                      src: "https://particles.js.org/images/fruits//strawberry.png",
                      width: 32,
                      height: 32
                    },
                    14: {
                      src: "https://particles.js.org/images/fruits//watermelon.png",
                      width: 32,
                      height: 32
                    },
                    15: {
                      src: "https://particles.js.org/images/fruits//watermelon_slice.png",
                      width: 32,
                      height: 32
                    }
                  }
                },
                type: "image"
              },
              size: {
                random: {
                  enable: false,
                  minimumValue: 1
                },
                value: 16,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 40,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                  minimumValue: 0.1
                }
              },
              stroke: {
                width: 0,
                color: {
                  value: "#000000",
                  animation: {
                    h: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      delay: 0,
                      decay: 0,
                      sync: true
                    },
                    s: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      delay: 0,
                      decay: 0,
                      sync: true
                    },
                    l: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      delay: 0,
                      decay: 0,
                      sync: true
                    }
                  }
                }
              },
              zIndex: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1
              },
              destroy: {
                bounds: {},
                mode: "none",
                split: {
                  count: 1,
                  factor: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: 3
                  },
                  rate: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: {
                      min: 4,
                      max: 9
                    }
                  },
                  sizeOffset: true
                }
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0
                },
                enable: false,
                enlighten: {
                  enable: false,
                  value: 0
                },
                mode: "vertical",
                speed: 25
              },
              tilt: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false
                },
                direction: "clockwise",
                enable: false
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1
                }
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: {
                  angle: 50,
                  move: 10
                }
              },
              life: {
                count: 0,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: 0,
                  sync: false
                },
                duration: {
                  random: {
                    enable: false,
                    minimumValue: 0.0001
                  },
                  value: 0,
                  sync: false
                }
              },
              rotate: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                triangles: {
                  enable: false,
                  frequency: 1
                },
                width: 1,
                warp: false
              },
              repulse: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0,
                enable: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1
              }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: {},
            smooth: false,
            style: {},
            themes: {},
            zLayers: 100,
            motion: {
              disable: false,
              reduce: {
                factor: 4,
                value: true
              }
            }
          }}
      />
      <div className={styles.description}>
        <p>
          <code className={styles.code}>
            K Singh

          </code>
        </p>

        <Social />
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
            <p>
              Founder of codnap & SFI.
            </p>
          </div>
        </Link >
      </div>
    </main>
  );
}
