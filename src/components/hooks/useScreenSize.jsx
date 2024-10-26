"use client";

import { useState } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  return screenSize;
}

export default useScreenSize;

