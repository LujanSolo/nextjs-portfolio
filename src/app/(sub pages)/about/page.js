import Image from "next/image";
import bg from '../../../../public/background/about-bg.jpg';
import RenderModel from '../../../components/RenderModel';
import Holocron from "../../../components/models/Holocron";

export default function About() {
  return (
    <>

      <Image src={bg} alt='background image' className="-z-50 fixed w-full h-full object-cover object-center opacity-50" />

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel preset="sunset">
          <Holocron />
        </RenderModel>
      </div>

    </>
  );
}   