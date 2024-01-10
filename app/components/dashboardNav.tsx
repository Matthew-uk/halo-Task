import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = ({ id }: any) => {
  return (
    <div className="flex justify-between items-center mx-10 py-8 w-full border-b border-gray-300 h-12">
      <GiHamburgerMenu size={25} className="cursor-pointer" />
      <h2 className="text-xl">Hello {id}</h2>
    </div>
  );
};

export default Navigation;
