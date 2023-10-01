"use client";
import Calendar from "@/components/Calendar/main";
import RightPane from "@/components/RightPane/main";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import { useEffect, useState } from "react";
import TopMenu from "@/components/TopMenu";

export default function Home() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [openRightPane, setOpenRightPane] = useState<boolean>(false);
  const [contentRightPanel, setContentRightPanel] =
    useState<EnumPagesPanel | null>(null);

  useEffect(() => {
    console.log(openRightPane);
  }, [openRightPane]);
  return (
    <main className="flex flex-col space-y-8 relative min-h-screen items-center justify-center py-8 bg-gray-700">
      <TopMenu
        setOpenRightPanel={setOpenRightPane}
        setContentRightPanel={setContentRightPanel}
        setCurrentDate={setCurrentDate}
      />
      <Calendar currentDate={currentDate} />
      <RightPane
        open={openRightPane}
        setOpen={setOpenRightPane}
        content={contentRightPanel}
      />
    </main>
  );
}
