"use client";
import Box from "@/app/components/box";
import React, { useState } from "react";
import Img1 from "@/app/img/pie1.png";
import Img2 from "@/app/img/pie2.jpeg";

const Page = () => {
  // React Hooks are helpers that help react do normal html can do on it's own that react cannot do.
  // const email = ""
  // changeEmail(value) || email = value;
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };

  return (
    <div className="border flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="border-2 flex flex-col justify-center mx-10 my-10 gap-10 p-4"
      >
        <h2 className="text-center text-2xl">Login</h2>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            changeEmail(e.target.value);
            console.log(`Email has changed to ${email}`);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => changePassword(e.target.value)}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-orange-text text-white py-2 cursor-pointer"
        />
      </form>
      <div className="flex flex-row gap-4 items-center justify-between">
        <Box
          img={Img1}
          title="The Thanksgiving Pie"
          text="This is the greatest Thanksgiving Pie the world has ever seen."
        />
        <Box img={Img2} title="Pie Chart" text="Mine your PI coin" />
      </div>
    </div>
  );
};

export default Page;
