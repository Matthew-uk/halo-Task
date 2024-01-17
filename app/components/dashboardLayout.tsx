"use client";
import React, { CSSProperties, useEffect, useState } from "react";
import DashboardNav from "./dashNav";
import Navigation from "./dashboardNav";
import axios from "axios";
import Cookies from "js-cookie";
import useUserStore from "@/store/store";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const DashboardLayout = ({ children, params }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("user");
  const { setUserName } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        toast.warning("Login In Again...", { autoClose: 2000 });
        router.push("/login");
        return false;
      }
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
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex">
      {loading ? (
        <div
          className="w-full"
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
        <>
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
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
