import useUserStore from "@/store/store";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navigation = ({ id, handleNav, isOpen }: any) => {
  const { username } = useUserStore();
  return (
    <div className="flex justify-between items-center py-4 mt-4 border-b border-gray-300 h-12 mb-5">
      {isOpen === false ? (
        <GiHamburgerMenu
          size={25}
          className={`cursor-pointer md:invisible`}
          onClick={() => handleNav(!isOpen)}
        />
      ) : (
        <IoCloseSharp
          size={30}
          className="z-50 cursor-pointer text-orange-text md:invisible -ml-5 mt-5 transition-all ease-in-out"
          onClick={() => handleNav(!isOpen)}
        />
      )}

      <h2 className="text-xl">Hello {username}</h2>
    </div>
  );
};

export default Navigation;
