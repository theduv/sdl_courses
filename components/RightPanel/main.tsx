import clsx from "clsx";
import RightPaneHeader from "./RightPaneHeader";
import { SetStateAction, Dispatch } from "react";
import PagesPanel from "@/enums/enumPagesPanel";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import Course from "@/interfaces/course.interface";
import AddCourse from "../ContentsPanel/AddCourse/main";
import SingleCourseDetails from "../ContentsPanel/SingleCourseDetails/main";

interface RightPaneProps {
  open: boolean;
  content?: PagesPanel | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
  detailsRightPanel: Course | null;
}

const RightPanel = (props: RightPaneProps) => {
  const getContent = () => {
    if (props.content === EnumPagesPanel.addCourse) return <AddCourse />;
    if (props.content === EnumPagesPanel.singleCourseDetails)
      return <SingleCourseDetails course={props.detailsRightPanel} />;
  };

  return (
    <div
      className={clsx(
        "bg-gray-800 fixed right-0 transition ease-in-out rounded-l-lg p-4 flex flex-col space-y-8",
        {
          "ease-in duration-300 translate-x-0 ": props.open,
          "translate-x-full": !props.open,
        }
      )}
      style={{ height: "90%", width: "25%" }}
    >
      <RightPaneHeader setOpen={props.setOpen} content={props.content} />
      {getContent()}
    </div>
  );
};

export default RightPanel;
