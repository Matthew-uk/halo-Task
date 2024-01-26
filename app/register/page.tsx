"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const inputContainer = "flex flex-col gap-2 text-sm";
const input = "outline-none border border-gray-text text-orange-text p-1";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userDetails = { username: name, email, password };
    console.log(userDetails);
    if ((name || email || password) === "") {
      toast.warn("Fill Out the form properly", { autoClose: 2000 });
    } else {
      try {
        setLoading(true);
        const res = await axios.post(
          "https://halo-task-backend.onrender.com/api/v1/register",
          userDetails
        );
        const username = res.data.user.username;
        console.log(res.data);
        toast.success("Registration Successful!!!", { autoClose: 2000 });
        toast.success(`Welcome to Halo Task ${username}`, { delay: 3000 });
        Cookies.set("user", res.data.token, { expires: 1 });
        router.push(`/dashboard/${res.data.user._id}`);
      } catch (error: any) {
        const errMsg = error?.response?.data?.message;
        if (!errMsg) console.log(error);
        toast.error(errMsg, { autoClose: 3000 });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Register Container */}
      <div className="register-container flex items-center justify-center flex-col rounded-md w-10/12 lg:w-1/3 bg-white py-8 h-2/3 lg:h-5/6 border-t-4 border-orange-text">
        {/* Headers */}
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-4xl text-gray-text mb-8">Halo Task</h1>
          <h2 className="text-2xl mb-6 text-orange-text">Register</h2>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col w-5/6 gap-4">
          {/* Name */}
          <div className={inputContainer}>
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className={input}
              required
            />
          </div>
          {/* Email */}
          <div className={inputContainer}>
            <label>Email</label>
            <input
              type="email"
              className={input}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div className={inputContainer}>
            <label>Password</label>
            <input
              type="password"
              className={input}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            disabled={loading}
            className="bg-orange-text text-white h-10 mt-4 mb-8 text-sm w-full disabled:opacity-40 transition-all ease-out"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <p className="text-center text-sm">
            Already a user?{" "}
            <Link className="underline text-orange-text" href={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
