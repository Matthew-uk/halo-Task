import axios from "axios";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Cookies from "js-cookie";
import useUserStore from "@/store/store";

interface NoteProps {
  note: any;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  // const [starred, setStarred] = useState(false)
  const { setRefresh } = useUserStore();
  const token = Cookies.get("user");
  const handleStarred = async (starred: any) => {
    try {
      const res = await axios.patch(
        `https://halo-task-backend.onrender.com/api/v1/notes?id=${note._id}&value=${starred}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRefresh();
      console.log(res.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `https://halo-task-backend.onrender.com/api/v1/notes?id=${note._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRefresh();
      console.log(res.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className={`shadow-md rounded-xl ${note.bgColor} py-4 px-3 h-max`}>
      <div className="flex items-center justify-between">
        <p className="">{note?.title}</p>
        <IoClose
          size={20}
          className="font-extrabold cursor-pointer"
          onClick={() => handleDelete()}
        />
      </div>
      <div className="border border-black my-2"></div>
      <div className="flex justify-between flex-col h-full">
        <p>{note?.description}</p>
        <div className="flex flex-row items-center w-full justify-between">
          <p className="text-xs mt-3 text-gray-text opacity-80 bottom-0">
            {note?.createdAt.split("T")[0]}
          </p>
          {note.starred ? (
            <FaStar
              className="cursor-pointer"
              onClick={() => {
                handleStarred(false);
              }}
            />
          ) : (
            <FaRegStar
              className="cursor-pointer"
              onClick={() => {
                handleStarred(true);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
