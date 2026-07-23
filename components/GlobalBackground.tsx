"use client";

import Particles from "./Particles";

export function GlobalBackground() {
  return (
    <div 
      style={{ 
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0, 
        pointerEvents: "none",
        overflow: "hidden",
        background: "#03050d"
      }}
    >
      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
    </div>
  );
}
