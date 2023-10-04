import EnumPagesPanel from "@/enums/enumPagesPanel";
import Course from "@/interfaces/course.interface";
import Store from "@/interfaces/store.interface";
import useRightPanelStore from "@/store/store";
import { AiOutlineLink } from "react-icons/ai";
import { FaRegNoteSticky } from "react-icons/fa6";

interface ButtonCourseProps {
  course: Course;
}

const ButtonCourse = (props: ButtonCourseProps) => {
  const panelStore: Store = useRightPanelStore((state: any) => ({ ...state }));

  const onClickDetailsCourse = () => {
    panelStore.setOpen(true);
    panelStore.setType(EnumPagesPanel.singleCourseDetails);
    panelStore.setAddCourseDefault({
      id: props.course.id,
      title: props.course.title,
      teacher: props.course.teacher ?? "",
      notes: "",
      room: props.course.room ?? "",
      date: `${props.course.timeFrom.year}-${props.course.timeFrom.month
        .toString()
        .padStart(2, "0")}-${props.course.timeFrom.date
        .toString()
        .padStart(2, "0")}`,
      hourFrom: `${props.course.timeFrom.hour.toString().padStart(2, "0")}:00`,
      hourTo: `${props.course.timeTo.hour.toString().padStart(2, "0")}:00`,
      links: props.course.links ? props.course.links.split(";") : [],
      color: props.course.color ?? "bg-lime-600",
    });
  };

  return (
    <button
      className={
        "h-full w-0 rounded-md flex-1 items-center justify-center flex p-1 space-x-2 text-white " +
        (props.course.color ? props.course.color : "bg-black")
      }
      key={props.course.id}
      title={props.course.title}
      onClick={onClickDetailsCourse}
    >
      <p className="text-ellipsis overflow-hidden whitespace-nowrap">
        {props.course.title}
      </p>
      <div className="flex items-center space-x-1">
        {props.course.links && props.course.links.length !== 0 && (
          <AiOutlineLink />
        )}
        {props.course.notes.length !== 0 && <FaRegNoteSticky />}
      </div>
    </button>
  );
};

export default ButtonCourse;
