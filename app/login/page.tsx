import Link from "next/link";
import React from "react";
const InputContainer = "flex flex-col gap-2 text-sm"
const Input = "outline-none border-b border-gray-text text-orange-text"

const Login = () => {
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
          <form className="flex flex-col w-5/6 gap-4">

            {/* input-------- */}
            <div className={InputContainer}>
              <label>Email</label>
              <input className={Input} type="email" required />
            </div>
            <div className={InputContainer}>
              <label>Password</label>
              <input className={Input} type="password" required />
            </div>

            {/* submit-button-------- */}
            <div className={InputContainer}>
                <button type="submit" className="bg-orange-text text-white h-10 mt-4 mb-8 text-sm w-full">Submit</button>
            </div>
          </form>

            {/* redirect to register-------- */}
          <p className="text-center text-sm">
            Don't have an Account?{" "}
            <Link className="underline text-orange-text text-center text-sm" href={"/register"}> 
                Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
