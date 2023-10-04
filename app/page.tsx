"use client";
import Calendar from "@/components/Calendar/main";
import { useState } from "react";
import TopMenu from "@/components/TopMenu";
import RightPanel from "@/components/RightPanel/main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  return (
    <main className="flex flex-col text-gray-200 space-y-4 relative min-h-screen items-center justify-center py-8 bg-gray-700">
      <TopMenu setCurrentDate={setCurrentDate} />
      <Calendar currentDate={currentDate} />
      <RightPanel />
      <ToastContainer position="bottom-right" theme="colored" />
    </main>
  );
}
