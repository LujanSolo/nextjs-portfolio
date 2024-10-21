import Image from "next/image";
import bg from '../../../../public/background/projects-bg.jpg';
import ProjectList from "../../../components/projects/index";
import { projectsData } from "../../data";
import RenderModel from '../../../components/RenderModel';
import PowerCore from "../../../components/models/PowerCore";

export default function Projects() {
  return (
    <>

      <Image src={bg} alt='background image' className="-z-50 fixed w-full h-full object-cover object-center opacity-40" />

      <ProjectList projects={projectsData} /> 
 
      <div className="flex items-center justify-center fixed top-20 left-10 h-screen">
        <RenderModel preset="sunset">
          <PowerCore />
        </RenderModel>
      </div>

    </>
  );
}   