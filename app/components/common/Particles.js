"use client";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Particles as TsParticles } from "react-tsparticles";

const Particles = ({
  className = "",
  id = "tsparticles",
  color = "#3b82f6",
  particleCount = 60,
  speed = 1.5,
  size = { min: 1, max: 3 },
}) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div
      id={`particles-container-${id}`}
      className={`absolute inset-0 isolate ${className}`}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <TsParticles
        id={id}
        className="absolute inset-0"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: false,
              },
            },
          },
          particles: {
            color: {
              value: color,
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            links: {
              color: color,
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: speed,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: particleCount,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: size,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particles;
