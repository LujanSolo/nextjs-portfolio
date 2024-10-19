"use client";
import React from 'react';
import { BtnList } from '@/app/data';
import NavButton from './NavButton';

const Navigation = () => {

  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed h-screen flex items-center justify-center w-full">
      <div className='flex items-center justify-between relative'>
        {
          BtnList.map((btn, index) => {

            const radianAngle = (index * angleIncrement * Math.PI) / 180;
            const radius = 'calc(28vw - 1rem)';
            const x = `calc(${radius}*${Math.cos(radianAngle)})`;
            const y = `calc(${radius}*${Math.sin(radianAngle)})`;

            return <NavButton key={btn.label} x={x} y={y} {...btn} />
          })
        }
      </div>
    </div>
  );
}

export default Navigation;