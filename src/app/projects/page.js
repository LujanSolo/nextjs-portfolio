import Image from "next/image";
import bg from '../../../public/background/projects-bg.jpg';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt='background image' fill className="-z-50 w-full h-full object-cover object-center opacity-50" />
      PROJECTS PAGE
    </main>
  );
}
