"use client";
import DashboardLayout from "@/app/components/dashboardLayout";
import Note from "@/app/components/note";
import NotesInput from "@/app/components/notesInput";
import useUserStore from "@/store/store";
import React from "react";

const NotesPage = () => {
  const { notes } = useUserStore();

  return (
    <DashboardLayout>
      <h2 className="text-2xl mt-4">You have {notes.length} notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <NotesInput />
        {notes.map((note: any) => (
          <Note note={note} />
        ))}
        {/* <Note notes={notes} /> */}
      </div>
    </DashboardLayout>
  );
};

export default NotesPage;
