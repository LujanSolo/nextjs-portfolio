import Image from "next/image";
import bg from '../../../public/background/projects-bg.jpg';
import ProjectList from "../components/projects/index";
import { projectsData } from "../data";
import RenderModel from '../components/RenderModel';
import PowerCore from "../components/models/PowerCore";

export default function Projects() {
  return (
    <main className="flex min-h-screen relative">

      <Image src={bg} alt='background image' fill className="-z-50 w-full h-full object-cover object-center opacity-50" />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-0 left-20 h-screen">
        <RenderModel preset="sunset">
          <PowerCore />
        </RenderModel>
      </div>

    </main>
  );
}  