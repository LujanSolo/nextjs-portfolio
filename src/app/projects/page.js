import Image from "next/image";
import bg from '../../../public/background/projects-bg.jpg';
import ProjectList from "../components/projects/index";
import { projectsData } from "../data";


export default function Projects() {
  return (
    <main className="flex min-h-screen relative">
      <Image src={bg} alt='background image' fill className="-z-50 w-full h-full object-cover object-center opacity-50" />
      <ProjectList projects={projectsData} />
    </main>
  );
}  