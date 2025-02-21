"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "framer-motion";

export function Globe() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const fadeIn = useRef(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const doublePi = Math.PI * 2;
    const onResize = () => {
      if (!canvasRef.current) return;
      width = canvasRef.current.offsetWidth;
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.1, 0.1, 0.35],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.1, 0.8, 1],
      markers: [
        { location: [23.4607, 91.1809], size: 0.1 } // Cumilla, Bangladesh
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
        state.width = width * 2
        state.height = width * 2
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full min-h-[40vh]">
      <div className="relative aspect-square w-[280px] sm:w-[350px] md:w-[400px]">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 rounded-full" />
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            contain: 'layout paint size',
            cursor: 'auto',
            opacity: 1,
          }}
        />
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center z-20 flex flex-col items-center gap-1">
          <p className="text-white/90 text-sm font-light">Cumilla, Bangladesh</p>
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0ff] animate-pulse" />
            <p className="text-[#0ff] text-xs font-light">Live</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Globe;
