import Image from "next/image";
import React from "react";
import HeroImg from "@/app/img/hero.png";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="px-5 md:px-20 w-full flex flex-col-reverse md:flex-row gap-8 md:gap-0 md:justify-between items-center justify-center py-16">
        <div className="flex flex-col gap-6 md:w-1/2 md:mt-0 mt-8">
          <h1 className="text-gray-text text-4xl lg:text-6xl font-bold">
            A New Way to Track Tasks and take notes
          </h1>
          <h3 className="text-orange-text">
            Halo_Task is a simple task tracking app that allows you to track
            your tasks and notes.
          </h3>
          <Link
            className="bg-gray-text rounded-full text-white px-5 py-2 w-max"
            href={"/register"}
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 w-full">
          <Image src={HeroImg} alt="Hero Image" />
        </div>
      </div>
      <p className="md:px-20 text-center md:text-start">
        A Collab 🔗 Project between
        <Link
          className="text-orange-text"
          href={"https://github.com/Matthew-uk"}
        >
          {" "}
          Ukarionisfien Matthew{" "}
        </Link>
        and
        <Link
          className="text-orange-text"
          href={"https://github.com/Divine-Praise"}
        >
          {" "}
          Divine Atansi
        </Link>
      </p>
    </>
  );
};

export default Hero;
