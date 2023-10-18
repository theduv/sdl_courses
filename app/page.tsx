"use client";

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Calendar from "@/components/Calendar/main";
import TopMenu from "@/components/TopMenu";
import RightPanel from "@/components/RightPanel/main";
import GlobalModal from "@/components/Global/GlobalModal";
import { useConfigStore } from "@/store/store";

export default function Home() {
  const configStore = useConfigStore((state: any) => ({ ...state }));
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const onResizeHandler = () => {
    configStore.setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
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
      {/* {configStore.windowWidth > 400 && ( */}
      <TopMenu setCurrentDate={setCurrentDate} />
      {/* )} */}
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <RightPanel />
      <GlobalModal />
      <ToastContainer position="bottom-right" theme="colored" />
    </main>
  );
}
