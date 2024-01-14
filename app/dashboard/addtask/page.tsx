import DashboardLayout from "@/app/components/dashboardLayout";
import React from "react";

const Page = () => {
  const inputContainer = "flex flex-col mb-4 placeholder:text-black text-black";
  const inputStyle = "border border-black mt-2 h-10 outline-none px-2 w-full";
  const labelStyles = "text-gray-text";
  return (
    <DashboardLayout>
      <div className="border-2 rounded-md px-6 md:px-8 py-8 border-t-orange-text h-full w-full bg-white">
        <h1 className="mb-6 text-2xl">Add Task</h1>
        <div className="flex justify-between flex-col gap-6">
          <div className={`${inputContainer}`}>
            <label className={`${labelStyles}`}>Task Name</label>
            <input
              type="text"
              placeholder="Task Name"
              className={`${inputStyle}`}
            />
          </div>
          <div className={`${inputContainer}`}>
            <label className={`${labelStyles}`}>Task Description</label>
            <input
              type="text"
              placeholder="Task Description"
              className={`${inputStyle}`}
            />
          </div>
          <div className={`${inputContainer}`}>
            <label className={`${labelStyles}`}>Due Date</label>
            <input
              type="date"
              placeholder="Due Date"
              className={`${inputStyle}`}
            />
          </div>
          <div>
            <label className="mr-2">Important</label>
            <input type="checkbox" />
          </div>
          <button
            className="bg-orange-text text-white border-0 py-2"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Page;
