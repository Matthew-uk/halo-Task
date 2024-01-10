import React from "react";
import { FaTasks } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaRegStickyNote } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

const DashboardNav = ({ handleNav, isOpen }: any) => {
  return (
    <div
      className={`flex flex-col left-0 justify-between h-screen transition-all ease-out bg-gray-text w-64 md:w-96 fixed md:relative py-8 ${
        isOpen ? "-translate-x-full" : "translate-x-0"
      } md:translate-x-0`}
    >
      <h1
        className="text-3xl text-orange-text text-center w-full h-1/6"
        onClick={() => handleNav(true)}
      >
        Halo Task
      </h1>
      <div className="h-5/6 px-4 text-white">
        {/* Task */}
        <div className="text-lg mb-12">
          <Link
            href={"task"}
            className="flex w-full justify-start items-center [word-spacing: 20px] border-b border-gray-500 cursor-pointer"
          >
            <FaTasks className="mr-2 text-orange-text" />
            Tasks
          </Link>
          <div className="ml-4 flex flex-col gap-4 text-base mt-4 items-start justify-start">
            <Link
              href={"/dashboard/important"}
              className="flex flex-row items-center p-0 cursor-pointer mb-4"
            >
              <IoIosNotificationsOutline
                className="ml-0 mr-2 text-orange-text"
                size={25}
              />
              Important
            </Link>
            <Link
              href={"/dashboard/important"}
              className="flex flex-row items-center cursor-pointer mb-4"
            >
              <FaRegClock className="ml-1 mr-2 text-orange-text" size={17} />
              Pending
            </Link>
            <Link
              href={"/dashboard/complete"}
              className="flex flex-row items-center cursor-pointer mb-4"
            >
              <TiTick className="ml-1 mr-2 text-orange-text" size={17} />
              Complete
            </Link>
          </div>
        </div>
        {/* Notes */}
        <div>
          <Link
            href={"/notes"}
            className="flex w-full justify-start mt-8 items-center [word-spacing: 20px] border-b border-gray-500 cursor-pointer"
          >
            <FaRegStickyNote className="mr-2 text-orange-text" />
            Notes
          </Link>
          <div className="ml-4 flex flex-col gap-4 text-base mt-4 items-start justify-start">
            <h2 className="flex flex-row items-center cursor-pointer mt-4">
              <FaRegStar className="ml-1 mr-2 text-orange-text" size={17} />
              Starred Notes
            </h2>
          </div>
        </div>
      </div>
      {/* <div></div> */}
    </div>
  );
};

export default DashboardNav;
