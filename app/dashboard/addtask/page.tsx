"use client";
import DashboardLayout from "@/app/components/dashboardLayout";
import useUserStore from "@/store/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Page = () => {
  const inputContainer = "flex flex-col mb-4 placeholder:text-black text-black";
  const inputStyle = "border border-black mt-2 h-10 outline-none px-2 w-full";
  const labelStyles = "text-gray-text";
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [date, setDate] = useState("");
  const [important, setImportant] = useState(false);
  const { userId } = useUserStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const token = Cookies.get("user");

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    console.log({
      taskName,
      taskDescription,
      date,
      important,
    });

    try {
      setLoading(true);
      const res = await axios.post(
        "https://halo-task-backend.onrender.com/api/v1/task",
        {
          userId,
          taskName,
          taskDescription,
          date,
          important,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      toast.success("Task Created", { autoClose: 2000 });
      router.push(`/dashboard/${userId}`);
    } catch (error: any) {
      console.log(error.message);
      toast.error("An Error Occured while creating Task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="border-2 rounded-md px-6 md:px-8 py-8 border-t-orange-text h-full w-full bg-white">
        <h1 className="mb-6 text-2xl">Add Task</h1>
        <form
          className="flex justify-between flex-col gap-6"
          onSubmit={handleFormSubmit}
        >
          <div className={`${inputContainer}`}>
            <label className={`${labelStyles}`}>Task Name</label>
            <input
              type="text"
              placeholder="Task Name"
              className={`${inputStyle}`}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div className={`${inputContainer}`}>
            <label className={`${labelStyles}`}>Task Description</label>
            <input
              type="text"
              placeholder="Task Description"
              className={`${inputStyle}`}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            />
          </div>
          <div className={`${inputContainer}`}>
            <label className={`${labelStyles}`}>Due Date</label>
            <input
              type="date"
              placeholder="Due Date"
              className={`${inputStyle}`}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mr-2">Important</label>
            <input
              type="checkbox"
              onChange={(e) => setImportant(e.target.checked)}
            />
          </div>
          <button
            disabled={loading}
            className="bg-orange-text text-white border-0 py-2 disabled:opacity-50"
            type="submit"
          >
            {loading ? "Creating Task..." : "Add Task"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Page;
