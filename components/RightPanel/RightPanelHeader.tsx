"use client";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import useRightPanelStore from "@/store/store";

const RightPanelHeader = () => {
  const storePanel = useRightPanelStore((state: any) => ({
    setOpen: state.setOpen,
    type: state.type,
  }));

  const getTitle = () => {
    if (storePanel.type === EnumPagesPanel.addCourse) return "Ajouter un cours";
    if (storePanel.type === EnumPagesPanel.singleCourseDetails)
      return "Détails du cours";
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div />
      <h1 className="text-2xl font-bold">{getTitle()}</h1>
      <button onClick={() => storePanel.setOpen(false)}>X</button>
    </div>
  );
};

export default RightPanelHeader;
