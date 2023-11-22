'use client'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "model.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={20} />
    </>
  );
};

export default function App() {
  return (
    <div className="App flex w-4/5 h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="night" background blur={1}/>
        </Suspense>
      </Canvas>
    </div>
  );
}