import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

const BlackWhiteGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 1;
      globe.controls().enableZoom = false;
      globe.controls().enablePan = false;
    }
  }, []);

  return (
    <div className="w-full h-screen">
      <Globe
        ref={globeRef}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)" // fond transparent
        showGraticules={true}           // quadrillage
        showAtmosphere={false}          // pas d'atmosphère
      />
    </div>
  );
};

export default BlackWhiteGlobe;
