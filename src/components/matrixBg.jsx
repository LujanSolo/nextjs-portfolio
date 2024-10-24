"use client";
import React, { useEffect, useState } from 'react';

const createMatrixCode = () => ({
  id: Math.random(),
  top: `-${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  speed: Math.random() * 5 + 3,
  char: String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))  // Random katakana-like characters
})

const MatrixBg = () => {

  const [matrixCode, setMatrixCode] = useState([]);

  useEffect(() => {
    const addCodeAtRandomInterval = () => {
      const newCode = createMatrixCode();
      setMatrixCode((prev) => [...prev.slice(-99), newCode]);
    };

    const interval = setInterval(addCodeAtRandomInterval, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black overflow-hidden -z-40'>
      {
        matrixCode.map((code) => {
          return <div key={code.id}
            className='absolute text-[16px] font-mono'
            style={{
              top: code.top,
              left: code.left,
              color: '#00FF00',
              animation: `fall ${code.speed}s linear infinite, colorShift ${code.speed}s linear infinite`,
            }}>
            {code.char}
          </div>
        })
      }
    </div>
  )
}

export default MatrixBg;