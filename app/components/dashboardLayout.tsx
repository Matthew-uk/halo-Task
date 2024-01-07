"use client";
import React, { useState } from "react";
import DashboardNav from "./dashNav";

const DashboardLayout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <DashboardNav isOpen={isOpen} handleNav={setIsOpen} />
      {children}
    </div>
  );
};

export default DashboardLayout;
