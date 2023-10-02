import clsx from "clsx";
import { SetStateAction, Dispatch } from "react";
import PagesPanel from "@/enums/enumPagesPanel";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import Course from "@/interfaces/course.interface";
import AddCourse from "../ContentsPanel/AddCourse/main";
import SingleCourseDetails from "../ContentsPanel/SingleCourseDetails/main";
import useRightPanelStore from "@/store/store";
import RightPanelHeader from "./RightPanelHeader";

const RightPanel = () => {
  const panelStore = useRightPanelStore((state: any) => ({ ...state }));

  const getContent = () => {
    console.log();
    if (panelStore.type === EnumPagesPanel.addCourse) return <AddCourse />;
    if (panelStore.type === EnumPagesPanel.singleCourseDetails)
      return <SingleCourseDetails />;
  };

  return (
    <div
      className={clsx(
        "bg-gray-800 fixed right-0 transition ease-in-out rounded-l-lg p-4 flex flex-col space-y-4",
        {
          "ease-in duration-300 translate-x-0 ": panelStore.isOpen,
          "translate-x-full": !panelStore.isOpen,
        }
      )}
      style={{ height: "90%", width: "30%" }}
    >
      <RightPanelHeader />
      {getContent()}
    </div>
  );
};

export default RightPanel;
