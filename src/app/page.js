import Image from "next/image";
import bg from '../../public/background/home-bg.jpg';
import RenderModel from "../components/RenderModel";
import RedChair from "../components/models/RedChair";
import Navigation from "../components/navigation";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt='background image' fill className="-z-50 w-full h-full object-cover object-center opacity-70" />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel preset="dawn">
          <RedChair />
        </RenderModel>
      </div>
    </main>
  );
}
