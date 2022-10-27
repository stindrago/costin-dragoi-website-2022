import React from "react";
import { name, description } from "../constants";

const Hero = () => {
  return (
    <section className="mt-32 h-screen">
      <div className="mx-auto flex max-w-fit flex-col text-center">
        <h1 className="lg:text-full max-w-2xl bg-gradient-to-b from-green via-purple to-pink bg-clip-text font-head text-[15rem] text-transparent drop-shadow-md animate__bounceInDown animate__animated sm:text-[30rem]">
          {name}
        </h1>
        <p className="text-md my-8 mx-auto max-w-fit text-xl font-semibold leading-relaxed text-foreground drop-shadow-md sm:text-3xl lg:text-3xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
