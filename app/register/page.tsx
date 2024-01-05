import Link from "next/link";
import React from "react";

const inputContainer = "flex flex-col gap-2 text-sm";
const input = "outline-none border-b border-gray-text text-orange-text pb-1";

const Login = () => {
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
        <form className="flex flex-col w-5/6 gap-4">
          {/* Name */}
          <div className={inputContainer}>
            <label>Name</label>
            <input type="text" className={input} required/>
          </div>
          {/* Email */}
          <div className={inputContainer}>
            <label>Email</label>
            <input type="email" className={input} required />
          </div>
          {/* Password */}
          <div className={inputContainer}>
            <label>Password</label>
            <input type="password" className={input} required/>
          </div>
          <button className="bg-orange-text text-white h-10 mt-4 mb-8 text-sm">
            Submit
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
