// src/components/ParticlesBackground.tsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  console.log("ParticlesBackground is mounted ✅");
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  className="absolute inset-0 z-0"
  options={{
    fullScreen: { enable: false },
    background: { color: "#000000" },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 4 },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    detectRetina: true,
  }}
/>

  );
};

export default ParticlesBackground;
