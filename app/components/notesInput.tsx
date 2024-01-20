import React, { useState } from "react";

const NotesInput = () => {
  const [bg, setBg] = useState("bg-white");
  const inputStyle =
    "rounded-full p-3 md:p-2 border border-gray-400 cursor-pointer";
  const handleBgChange = (color: any) => {
    setBg(color);
  };
  return (
    <div
      className={`border shadow-md flex flex-col ${bg} rounded-lg p-4 transition-all duration-500 ease-in-out`}
    >
      <input
        type="text"
        className={`border-0 border-b border-black ${bg} bg-transparent outline-none rounded-none p-2`}
        placeholder="Text"
      />
      <textarea
        className={`outline-none p-2 bg-transparent ${bg}`}
        cols={5}
        rows={5}
        placeholder="Description"
      ></textarea>
      <div className="flex flex-row justify-between mt-4">
        <div className="flex flex-row gap-3 items-center justify-between">
          <div
            onClick={() => handleBgChange("bg-white")}
            className={`${inputStyle} bg-white `}
          ></div>
          <div
            onClick={() =>
              handleBgChange(
                "bg-halo-blue text-gray-text placeholder:text-gray-text"
              )
            }
            className={`${inputStyle} bg-halo-blue`}
          ></div>
          <div
            onClick={() =>
              handleBgChange(
                "bg-halo-light-green text-white placeholder:text-white"
              )
            }
            className={`${inputStyle} bg-halo-light-green`}
          ></div>
          <div
            onClick={() =>
              handleBgChange(
                "bg-halo-light-orange text-white placeholder:text-white"
              )
            }
            className={`${inputStyle} bg-halo-light-orange`}
          ></div>
        </div>
        <button className="flex items-center gap-2 border-2 border-orange-text py-2 md:px-4 md:py-2 text-gray-text text-sm px-6 rounded-full">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            // className="submit-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
          <p>Note</p>
        </button>
      </div>
    </div>
  );
};

export default NotesInput;
