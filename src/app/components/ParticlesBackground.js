"use client";
import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import particlesConfig from "../config/partiles-config";
import { Container } from "@mui/material";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div id="particles-background">
      <Particles
        id="tsparticles"
        particlesLoaded="particlesLoaded"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        height="100vh"
        width="100vw"
      ></Particles>
    </div>
  );
};
export default ParticlesBackground;
