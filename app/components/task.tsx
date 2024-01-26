import useUserStore from "@/store/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdLabelImportant } from "react-icons/md";
import Cookies from "js-cookie";

interface Task {
  _id: any;
  taskName: string;
  taskDescription: string;
  date: string;
  pending: boolean;
  important: boolean;
}

interface TaskInterface {
  tasks: Task[];
}

const TaskBox: React.FC<TaskInterface> = ({ tasks }) => {
  const [loading, setLoading] = useState(false);
  const { setRefresh, userId } = useUserStore();
  const router = useRouter();
  const token = Cookies.get("user");

  const handleComplete = async (id: any) => {
    try {
      setLoading(true);
      const res = await axios.patch(
        `https://halo-task-backend.onrender.com/api/v1/task?id=${id}`
      );
      console.log(res.data);
      setRefresh();
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      // setLoading(true);
      const res = await axios.delete(
        `https://halo-task-backend.onrender.com/api/v1/task?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setRefresh();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex flex-col px-4 py-4 justify-center shadow-sm shadow-slate-300 mb-6 w-full rounded border-l-4 border-l-orange-text relative"
        >
          <IoClose
            size={20}
            className="absolute top-0 right-0 cursor-pointer font-extrabold text-gray-400"
            onClick={() => handleDelete(task?._id)}
          />
          <p className="text-halo-green flex items-center justify-between mt-4">
            {task.taskName}{" "}
            {task.important && (
              <MdLabelImportant size={20} className="text-orange-text" />
            )}
          </p>
          <p className="text-base mt-2">{task.taskDescription}</p>
          <div className="flex flex-row justify-between items-center pt-4 text-sm text-gray-500">
            <p>{task.date.split("T")[0]}</p>
            <button
              onClick={() => task.pending && handleComplete(task?._id)}
              disabled={loading}
              className={`border border-orange-text rounded-full p-2 cursor-pointer text-black disabled:opacity-50 transition-all ${
                task.pending ? "visible" : "text-white bg-orange-text"
              }`}
            >
              {loading
                ? "Hold On..."
                : !task.pending
                ? "Completed"
                : "Mark as Done"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBox;
