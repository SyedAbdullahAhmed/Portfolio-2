"use client";
import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion, useSpring as useFramerSpring, useAnimationFrame } from "framer-motion";

export function Globe() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, setSpring] = useState({ r: 0 });
  
  const rotation = useFramerSpring(0, {
    mass: 1,
    tension: 280,
    friction: 40,
    precision: 0.001,
  });

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [23.4607, 91.1809], size: 0.1 }, // Coordinates for Cumilla, Bangladesh
      ],
      onRender: (state) => {
        state.phi = phi + rotation.get();
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            rotation.set(delta / 200);
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 0.8,
        }}
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-white/80 text-sm">Cumilla, Bangladesh</p>
        <div className="flex items-center justify-center gap-1 mt-1">
          <div className="w-2 h-2 rounded-full bg-[#0ff] animate-pulse" />
          <p className="text-[#0ff] text-xs">Live</p>
        </div>
      </div>
    </div>
  );
} 