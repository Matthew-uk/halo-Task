import React from "react";

const Navbar = () => {
  return (
    <div className="md:px-20 px-5 py-5 flex flex-row w-full justify-between">
      <div className="logo text-2xl font-bold">Halo-Task</div>
      <div className="buttons">
        <button className="border-2 text-orange-text border-orange-text rounded-full px-4 py-1">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
