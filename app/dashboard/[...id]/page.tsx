"use client";
import DashboardLayout from "@/app/components/dashboardLayout";
import useUserStore from "@/store/store";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Page = ({ params }: any) => {
  const [loading, setLoading] = useState(false);
  const { setUserName } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("user");
      try {
        setLoading(true);
        const res = await axios.get(
          "https://halo-task-backend.onrender.com/api/v1/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserName(`${res.data.username}`);
        console.log(res.data.username);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <BeatLoader color="#36D7B7" cssOverride={override} size={15} />
        </div>
      ) : (
        <DashboardLayout params={params}>
          <div className="">
            {/* Header */}
            <div className="w-full flex justify-between items-center">
              <h2 className="">You have 0 Tasks</h2>
              <Link
                href={"/dashboard/addtask"}
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
      )}
      {/* <Layout>{params.userId}</Layout> */}
    </div>
  );
};

export default Page;
