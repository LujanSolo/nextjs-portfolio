'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import { Environment } from '@react-three/drei';

const RenderModel = ({ children, className, preset }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen relative -z-10", className)}>
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Environment preset={preset} />
    </Canvas>
  )
};

export default RenderModel;