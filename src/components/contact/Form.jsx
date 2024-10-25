"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {


    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 30000, // no more than one email per 30 seconds
          }
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "LujanSolo",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    }

    sendEmail(templateParams);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input type="text" placeholder="name" {...register("name", {
        required: "name required...",
        minLength: {
          value: 1,
          message: "Name field is empty..."
        }
      })}
        className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
      />
      {
        errors.name && <span className="inline-block self-start text-accent">{errors.name.message}</span>
      }
      <input type="email" placeholder="email" {...register("email", {
        required: "email required...",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Invalid email address..."
        }
      })}
        className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
      />
      {
        errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span>
      }
      <textarea placeholder='message' {...register("message", {
        required: "please enter a message...",
        maxLength: {
          value: 500,
          message: "Message should be less than 500 characters..."
        },
        minLength: {
          value: 15,
          message: "Message should be more than 15 characters..."
        }
      })}
        className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
      />
      {
        errors.message && <span className="inline-block self-start text-accent">{errors.message.message}</span>
      }
      <input type="submit" value="Transmit Message"
        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer'
      />
    </form>
  );
}