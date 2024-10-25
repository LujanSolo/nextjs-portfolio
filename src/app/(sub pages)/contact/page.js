import Image from "next/image";
import bg from '../../../../public/background/contact-solo.jpg';
import Form from '../../../components/contact/Form.jsx';

export default function Contact() {
  return (
    <>
      <Image src={bg} alt='background image' className="inset-0 -z-50 fixed w-full h-full object-cover object-center opacity-50" />
      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items=center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            call the operator
          </h1>
          <p className="text-center font-light">
          With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
          </p>
        </div>
        <Form />
      </article>
      
    </>
  );
}

