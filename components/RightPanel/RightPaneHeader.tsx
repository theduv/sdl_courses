"use client";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import { Dispatch, SetStateAction } from "react";

interface RightPaneHeaderProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  content?: EnumPagesPanel | null;
}

const RightPaneHeader = (props: RightPaneHeaderProps) => {
  const getTitle = () => {
    if (props.content === EnumPagesPanel.addCourse) return "Ajouter un cours";
    if (props.content === EnumPagesPanel.singleCourseDetails)
      return "Détails du cours";
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div />
      <h1 className="text-2xl font-bold">{getTitle()}</h1>
      <button onClick={() => props.setOpen(false)}>X</button>
    </div>
  );
};

export default RightPaneHeader;
