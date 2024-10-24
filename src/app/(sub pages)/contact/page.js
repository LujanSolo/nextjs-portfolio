import Image from "next/image";
import bg from '../../../../public/background/contact-solo.jpg';

export default function Contact() {
  return (
    <>
      <Image src={bg} alt='background image' className="inset-0 -z-50 fixed w-full h-full object-cover object-center opacity-50" />
    </>
  );
}

