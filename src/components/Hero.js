import React from 'react';
import illustration from '../images/illustration-working.svg';
import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="flex flex-row items-center justify-between my-10">
      <div className="w-5/12 gap-5 flex flex-col justify-start items-start pl-20">
        <h1 className="text-7xl font-black font-base text-chverydarkviolet leading-none">
          More than just shorter links
        </h1>
        <p className=" text-chgrayviolet leading-relaxed">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button title="Get Started" />
      </div>
      <figure className="w-5/12">
        <img src={illustration} alt="Working" className="scale-125 -right-20" />
      </figure>
    </section>
  );
}
