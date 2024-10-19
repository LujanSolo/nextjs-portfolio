import React from 'react';
import Link from 'next/link';
import { Home, Github, Linkedin, Palette, Phone, Twitter, User, NotebookText } from 'lucide-react';

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className='w-full h-auto' strokeWidth={1.5} />;
    case "about":
      return <User className='w-full h-auto' strokeWidth={1.5} />;
    case "projects":
      return <Palette className='w-full h-auto' strokeWidth={1.5} />;
    case "contact":
      return <Phone className='w-full h-auto' strokeWidth={1.5} />;
    case "github":
      return <Github className='w-full h-auto' strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className='w-full h-auto' strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className='w-full h-auto' strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className='w-full h-auto' strokeWidth={1.5} />;


    default:
      return <Home className='w-full h-auto' strokeWidth={1.5} />;

  }
}

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div className='absolute cursor-pointer z-50'
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link href={link} target={newTab ? '_blank' : '_self'} className='text-foreground rounded-full flex items-center justify-center' aria-label={label} name={label}>
        <span className='relative w-16 h-16 p-4'>{getIcon(icon)}</span>
      </Link>
    </div>
  )
}

export default NavButton;