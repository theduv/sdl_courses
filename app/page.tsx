"use client";

import Calendar from "@/components/Calendar/main";
import TopMenu from "@/components/TopMenu";
import RightPanel from "@/components/RightPanel/main";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import GlobalModal from "@/components/Global/GlobalModal";

export default function Home() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [windowWidth, setWindowWidth] = useState<number>(1200);

  const onResizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResizeHandler);
    return () => {
      window.removeEventListener("resize", onResizeHandler);
    };
  }, []);

  return (
    <main
      id="mainCalendar"
      className="flex max-[1260px]:text-xs flex-col text-gray-200 space-y-4 relative min-h-screen items-center justify-center py-4 bg-gray-700"
    >
      {windowWidth > 400 && <TopMenu setCurrentDate={setCurrentDate} />}
      <Calendar currentDate={currentDate} />
      <RightPanel />
      <GlobalModal />
      <ToastContainer position="bottom-right" theme="colored" />
    </main>
  );
}
