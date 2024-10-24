import Image from "next/image";
import bg from '../../../../public/background/about-bg.jpg';
import RenderModel from '../../../components/RenderModel';
import Holocron from "../../../components/models/Holocron";
import AboutDetails from "../../../components/about";

export default function About() {
  return (
    <>

      <Image src={bg} alt='background image' className="inset-0 -z-50 fixed w-full h-full object-cover object-center opacity-50" />

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel preset="park">
          <Holocron />
        </RenderModel>
      </div>
      
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/4 -translate-x-1/2">
          <h1 className="font-bold text-9xl text-accent">LujanSolo</h1>
          <p className="font-light text-foreground text-lg">Take a glance at the coder behind the page...</p>
        </div>
      </div>


      <AboutDetails />
    </>
  );
}

// apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse