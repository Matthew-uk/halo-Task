import React from "react";

const NotesInput = () => {
  return (
    <div className="border shadow-md flex flex-col bg-white rounded-lg p-4">
      <input
        type="text"
        className="border-0 border-b border-black outline-none rounded-none p-2"
        placeholder="Text"
      />
      <textarea
        className="outline-none p-2"
        cols={5}
        rows={5}
        placeholder="Description"
      ></textarea>
      <div className="flex flex-row gap-3">
        <div className="rounded-full bg-white p-3 border"></div>
        <div className="rounded-full bg-halo-blue p-3 border"></div>
        <div className="rounded-full bg-halo-light-green p-3 border"></div>
        <div className="rounded-full bg-halo-light-orange p-3 border"></div>
      </div>
    </div>
  );
};

export default NotesInput;
