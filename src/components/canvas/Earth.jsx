import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const BASE_SCALE = 2.5;
const FULL_SIZE_VIEWPORT_WIDTH = 7.5;

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  // Shrink the planet when the canvas is narrower than the model, so its
  // clouds are not cut off at the left and right edges.
  const viewportWidth = useThree((state) => state.viewport.width);
  const scale = BASE_SCALE * Math.min(1, viewportWidth / FULL_SIZE_VIEWPORT_WIDTH);

  return (
    <primitive object={earth.scene} scale={scale} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
