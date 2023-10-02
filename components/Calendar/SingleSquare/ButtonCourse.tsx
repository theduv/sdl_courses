import EnumPagesPanel from "@/enums/enumPagesPanel";
import Course from "@/interfaces/course.interface";
import useRightPanelStore from "@/store/store";

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
    });
  };

  return (
    <button
      key={props.course.id}
      style={{
        backgroundColor: props.course.backgroundColor ?? "#FFFFFF",
        color: props.course.textColor ?? "#000000",
      }}
      title={props.course.title}
      onClick={onClickDetailsCourse}
      className="h-full w-0 rounded-md flex-1 items-center justify-center flex"
    >
      <p className="text-ellipsis overflow-hidden whitespace-nowrap p-1">
        {props.course.title}
      </p>
    </button>
  );
};

export default ButtonCourse;
