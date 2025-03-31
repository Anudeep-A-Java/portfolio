import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

const TestParticles = () => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "#ffffff", // White background
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#000000", // Black particles
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 10,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: {
                default: "bounce",
              },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 10, color: "black", textAlign: "center" }}>
        <h1>Can You See the Particles?</h1>
      </div>
    </div>
  );
};

export default TestParticles;
