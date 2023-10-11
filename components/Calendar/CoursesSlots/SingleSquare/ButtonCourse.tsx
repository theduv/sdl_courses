import EnumPagesPanel from "@/enums/enumPagesPanel";
import { colorChoices } from "@/functions/const";
import Course from "@/interfaces/course.interface";
import PanelStore from "@/interfaces/panelStore.interface";
import { useRightPanelStore } from "@/store/store";
import { clsx } from "clsx";
import { AiOutlineLink } from "react-icons/ai";
import { FaRegNoteSticky } from "react-icons/fa6";

interface ButtonCourseProps {
  course: Course;
}

const ButtonCourse = (props: ButtonCourseProps) => {
  const panelStore: PanelStore = useRightPanelStore((state: any) => ({
    ...state,
  }));

  const onClickDetailsCourse = () => {
    panelStore.setOpen(true);
    panelStore.setType(EnumPagesPanel.singleCourseDetails);
    panelStore.setFormContent({
      id: props.course.id,
      title: props.course.title,
      isCanceled: props.course.isCanceled ?? false,
      teacher: props.course.teacher ? props.course.teacher : "",
      notes: props.course.notes,
      room: props.course.room ?? "",
      date: `${props.course.timeFrom.year}-${(props.course.timeFrom.month + 1)
        .toString()
        .padStart(2, "0")}-${props.course.timeFrom.date
        .toString()
        .padStart(2, "0")}`,
      hourFrom: `${props.course.timeFrom.hour.toString().padStart(2, "0")}:00`,
      hourTo: `${props.course.timeTo.hour.toString().padStart(2, "0")}:00`,
      links: props.course.links ? props.course.links.split(";") : [],
      link: "",
      color: props.course.color ?? colorChoices[0],
    });
  };

  return (
    <button
      className={clsx(
        `h-full w-0 rounded-md flex-1 items-center justify-between flex p-1 space-x-2 text-white ${props.course.color}`,
        {
          "bg-opacity-30 text-opacity-30": props.course.isCanceled,
        }
      )}
      key={props.course.id}
      title={props.course.title}
      onClick={onClickDetailsCourse}
    >
      <div />
      <div className="flex flex-col w-0 flex-1">
        <p className="text-ellipsis overflow-hidden whitespace-nowrap ">
          {props.course.title}
        </p>
        {((props.course.room && props.course.room.length !== 0) ||
          (props.course.teacher && props.course.teacher.length !== 0)) && (
          <p className="text-xs italic text-ellipsis overflow-hidden whitespace-nowrap">
            {props.course.room}{" "}
            {props.course.room?.length !== 0 &&
              props.course.teacher?.length !== 0 &&
              "-"}{" "}
            {props.course.teacher}
          </p>
        )}
      </div>
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
