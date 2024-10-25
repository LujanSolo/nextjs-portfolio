import Image from "next/image";
import bg from '../../../../public/background/contact-solo.jpg';
import Form from '../../../components/contact/Form.jsx';

export default function Contact() {
  return (
    <>
      <Image src={bg} alt='background image' className="inset-0 -z-50 fixed w-full h-full object-cover object-center opacity-40" />
      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items=center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            call the operator
          </h1>
          <p className="text-center font-light">
          They've got you backed into a corner, and you're not sure if there is a way out of it this time. Luckily, you've got a solid Operator at the end of your fingertips. He's got the programs, data, and components you need to get the webspace job done. Use the form below to transfer your message through the matrix and your operator will respond ASAP... woah.
          </p>
        </div>
        <Form />
      </article>
      
    </>
  );
}

