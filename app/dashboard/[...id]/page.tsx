"use client";
import React, { CSSProperties, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { BeatLoader } from "react-spinners";
import DashboardLayout from "@/app/components/dashboardLayout";
import useUserStore from "@/store/store";

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
        const response = await axios.get(
          "https://halo-task-backend.onrender.com/api/v1/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const username = response.data.username;
        setUserName(username);
        console.log(username);
      } catch (error: any) {
        console.error("Error fetching user data:", error.message);
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
              <Link href="/dashboard/addtask">
                <p className="px-6 py-2 bg-gray-text text-white rounded-md">
                  + Task
                </p>
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
