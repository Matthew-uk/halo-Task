import React from "react";
import { IoClose } from "react-icons/io5";

interface Task {
  taskName: string;
  taskDescription: string;
  date: string;
}

interface TaskInterface {
  tasks: Task[];
}

const TaskBox: React.FC<TaskInterface> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex flex-col px-4 py-4 justify-center shadow-sm shadow-slate-300 mb-6 w-full bg-transparent rounded border-l-4 border-l-orange-text relative"
        >
          <IoClose
            size={20}
            className="absolute top-0 right-0 cursor-pointer font-extrabold text-gray-400"
          />
          <p className="text-halo-green">{task.taskName}</p>
          <p className="text-base mt-2">{task.taskDescription}</p>
          <div className="flex flex-row justify-between items-center pt-4 text-sm">
            <p>{task.date.split("T")[0]}</p>
            <p className="border border-orange-text rounded-full p-2 cursor-pointer">
              Mark as Done
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBox;
