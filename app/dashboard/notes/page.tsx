"use client";
import DashboardLayout from "@/app/components/dashboardLayout";
import NotesInput from "@/app/components/notesInput";
import React from "react";

const NotesPage = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl mt-4">You have 0 notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <NotesInput />
        {/* <NotesInput />
        <NotesInput /> */}
      </div>
    </DashboardLayout>
  );
};

export default NotesPage;
