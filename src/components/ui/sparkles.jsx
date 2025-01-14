"use client";
import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function SparklesCore({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    particles: {
      number: {
        density: {
          enable: true,
          area: particleDensity || 800,
        },
        value: 0,
      },
      color: {
        value: particleColor || "#fff",
      },
      shape: {
        type: ["circle"],
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: minSize || 1, max: maxSize || 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: particleColor || "#fff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    background: {
      color: background || "#000",
    },
  };

  if (init) {
    return (
      <Particles
        id={id || "tsparticles"}
        className={className}
        options={options}
      />
    );
  }

  return null;
} 