"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
const InputContainer = "flex flex-col text-sm";
const Input = "outline-none border-b border-gray-text text-orange-text py-2";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const loginDetails = { email, password };
    console.log(loginDetails);
    try {
      setLoading(true);
      const res = await axios.post(
        "https://halo-task-backend.onrender.com/api/v1/login",
        loginDetails
      );
      console.log(res.data);
      const username = res.data.user.username;
      toast.info("Login Successful", { autoClose: 2000 });
      toast.success(`Welcome back ${username}`, {
        autoClose: 3000,
        delay: 3000,
      });
      router.push(`/dashboard/${res.data.user._id}`);
      Cookies.set("user", res.data.token, { expires: 1 });
    } catch (error: any) {
      console.log(error);
      const errMsg = error?.response?.data?.message;
      if (!errMsg) toast.error(error.message, { autoClose: 2000 });
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Login container--------- */}
        <div className="flex flex-col items-center justify-center w-10/12 lg:w-1/3 h-2/3 bg-white border-t-4 border-orange-text rounded-md">
          {/* Header-------------- */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-gray-text mb-8">Halo Task</h1>
            <h2 className="text-2xl text-orange-text mb-6">Login</h2>
          </div>

          {/* Form--------- */}
          <form className="flex flex-col w-5/6 gap-4" onSubmit={handleLogin}>
            {/* input-------- */}
            <div className={InputContainer}>
              <label>Email</label>
              <input
                className={Input}
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={InputContainer}>
              <label>Password</label>
              <input
                className={Input}
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* submit-button-------- */}
            <div className={InputContainer}>
              <button
                type="submit"
                className="bg-orange-text text-white h-10 mt-4 mb-8 text-sm w-full disabled:opacity-40 transition-all ease-out"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>

          {/* redirect to register-------- */}
          <p className="text-center text-sm">
            Don't have an Account?{" "}
            <Link
              className="underline text-orange-text text-center text-sm"
              href={"/register"}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
