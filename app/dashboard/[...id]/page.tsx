"use client";
import DashboardLayout from "@/app/components/dashboardLayout";
import Navigation from "@/app/components/dashboardNav";
import Layout from "@/app/components/layout";
import Link from "next/link";
import React from "react";

const Page = ({ params }: any) => {
  return (
    <div>
      <DashboardLayout params={params}>
        <div className="">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <h2 className="">You have 0 Tasks</h2>
            <Link
              href={""}
              className="px-6 py-2 bg-gray-text text-white rounded-md"
              onClick={() => console.log(params)}
            >
              + Task
            </Link>
          </div>
          <div>
            <h2>This is a new task</h2>
          </div>
        </div>
      </DashboardLayout>
      {/* <Layout>{params.userId}</Layout> */}
    </div>
  );
};

export default Page;
