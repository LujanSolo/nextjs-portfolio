import React from 'react';
import Link from 'next/link';

const getIcon = (icon) => {
  switch(icon) {
    case "home":
      return <Home className='w-full h-auto' strokeWidth={1.5} />;

      break;

    default:
      return <Home className='w-full h-auto' strokeWidth={1.5} />;
      
  }
}

const NavButton = ({x, y, label, link, icon, newTab}) => {
  return (
    <div className='absolute cursor-pointer z-50'
      style={{transform: `translate(${x}, ${y})`}}
    >
      <Link href={link} target={newTab ? '_blank' : '_self'} className='text-foreground rounded-full flex items-center justify-center' aria-label={label} name={label}>
        <span>{icon}</span>
      </Link>
    </div>
  )
}

export default NavButton;