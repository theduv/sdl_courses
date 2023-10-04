import EnumPagesPanel from "@/enums/enumPagesPanel";
import Course from "@/interfaces/course.interface";
import useRightPanelStore from "@/store/store";
import { AiOutlineLink } from "react-icons/ai";
import { FaRegNoteSticky } from "react-icons/fa6";

interface ButtonCourseProps {
  course: Course;
}

const ButtonCourse = (props: ButtonCourseProps) => {
  const panelStore = useRightPanelStore((state: any) => ({
    setOpen: state.setOpen,
    setType: state.setType,
    setCourseDetailsDefault: state.setCourseDetailsDefault,
  }));

  const onClickDetailsCourse = () => {
    panelStore.setOpen(true);
    panelStore.setType(EnumPagesPanel.singleCourseDetails);
    panelStore.setCourseDetailsDefault({
      title: props.course.title,
      notes: props.course.notes,
      id: props.course.id,
      links: props.course.links,
    });
  };

  if (props.course.title === "Linguistique générale") {
    console.log(props.course.links);
  }

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
