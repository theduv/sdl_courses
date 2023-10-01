"use client";
import Calendar from "@/components/Calendar/main";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import { useEffect, useState } from "react";
import TopMenu from "@/components/TopMenu";
import RightPanel from "@/components/RightPanel/main";
import Course from "@/interfaces/course.interface";

export default function Home() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [openRightPanel, setOpenRightPanel] = useState<boolean>(false);
  const [contentRightPanel, setContentRightPanel] =
    useState<EnumPagesPanel | null>(null);
  const [detailsRightPanel, setDetailsRightPanel] = useState<Course | null>(
    null
  );

  useEffect(() => {
    console.log(openRightPanel);
  }, [openRightPanel]);
  return (
    <main className="flex flex-col space-y-8 relative min-h-screen items-center justify-center py-8 bg-gray-700">
      <TopMenu
        setOpenRightPanel={setOpenRightPanel}
        setContentRightPanel={setContentRightPanel}
        setCurrentDate={setCurrentDate}
      />
      <Calendar
        currentDate={currentDate}
        setOpenRightPanel={setOpenRightPanel}
        setDetailsRightPanel={setDetailsRightPanel}
        setContentRightPanel={setContentRightPanel}
      />
      <RightPanel
        open={openRightPanel}
        setOpen={setOpenRightPanel}
        content={contentRightPanel}
        detailsRightPanel={detailsRightPanel}
      />
    </main>
  );
}
