"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input type="text" placeholder="name" {...register("Name", { required: true })}
        className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
      />
      <input type="email" placeholder="email" {...register("Email", { required: true })}
        className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
      />
      <textarea placeholder='message' {...register("Message", { required: true, max: 300, min: 10 })}
        className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
      />

      <input type="submit" value="Contact the Coder"
        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
      />
    </form>
  );
}