"use client";

import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import { PuffLoader } from "react-spinners";
import { Sculpture } from "./Sculpture";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Overlay from "./Overlay";

const Scene = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          {" "}
          <PuffLoader color={"white"} />{" "}
        </div>
      }>
      <div className="w-full h-screen">
        <Canvas
          shadows={"soft"}
          dpr={[1, 2]}
          camera={{ position: [4, 0, 0], fov: 50 }}>
          <group position={[0, -3.3, -3]} rotation={[0, Math.PI / 6, 0]}>
            <ScrollControls pages={2} damping={0.25}>
                <Overlay />
              <Sculpture />
            </ScrollControls>
          </group>
          <ambientLight intensity={1} />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              mipmapBlur
              luminanceSmoothing={0}
              intensity={0.9}
            />
          </EffectComposer> 
          <Environment preset="warehouse" />

        </Canvas>
      </div>
    </Suspense>
  );
};

export default Scene;
