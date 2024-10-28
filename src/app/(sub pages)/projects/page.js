import Image from "next/image";
import bg from '../../../../public/background/projects-bg.jpg';
import ProjectList from "../../../components/projects/index";
import { projectsData } from "../../data";
import RenderModel from '../../../components/RenderModel';
// import PowerCore from "@/components/models/PowerCore";
import dynamic from "next/dynamic";

const PowerCore = dynamic(()=> import("@/components/models/PowerCore"), {ssr: false} );

export default function Projects() {
  return (
    <>

      <Image src={bg} alt='background image' className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40" />

      <ProjectList projects={projectsData} /> 
 
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-0 h-screen -z-20">
        <RenderModel preset="park" >
          <PowerCore />
        </RenderModel>
      </div>

    </>
  );
}   
