"use client";
import React, { useEffect, useState } from "react";
import DashboardNav from "./dashNav";
import Navigation from "./dashboardNav";

const DashboardLayout = ({ children, params }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  // useEffect(() => {
  //   setId(params.id[0]);
  // }, [params.id]);
  return (
    <div className="flex">
      <DashboardNav
        isOpen={isOpen}
        handleNav={setIsOpen}
        onClick={() => setIsOpen(false)}
      />
      <div
        className="w-full px-8 flex flex-col"
        // onClick={() => setIsOpen(true)}
      >
        {<Navigation isOpen={isOpen} handleNav={setIsOpen} />}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
