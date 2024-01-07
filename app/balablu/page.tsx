"use client";
import React, { useState } from "react";
import DashboardLayout from "../components/dashboardLayout";

const Balablue = () => {
  const [count, setCount] = useState(20);
  const [name, setName] = useState("Nothing");
  // Data Type => Numbers(0-9), Strings(Text), Booleans(true or false), Array and Objects
  // useState track changes that react cannot normally catch
  // const count = useState(20); => const count = 20
  // const setCount; => setCount changes the value of count
  // count is a variable, while setCount is a function that changes the value of the variable.
  const add = () => {
    setCount(count + 1); //Set count to whatever count is but add 1.
    console.log(count);
    setName("Count has increased");
  };

  const subtract = () => {
    setCount(count - 1); //Set count to whatever count is but subtract 1
    console.log(count);
    setName("Count has decreased");
  };
  return (
    <div>
      <p>{name}</p>
      <button onClick={add} className="bg-red-500 py-2 px-6">
        +
      </button>
      <p>{count}</p>
      <button onClick={subtract} className="bg-red-500 py-2 px-6">
        -
      </button>
    </div>
  );
};

export default Balablue;
