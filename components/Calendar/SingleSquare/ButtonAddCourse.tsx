import EnumPagesPanel from "@/enums/enumPagesPanel";
import Store from "@/interfaces/store.interface";
import useRightPanelStore from "@/store/store";
import clsx from "clsx";

interface ButtonAddCourse {
  hovered: boolean;
  hour: string;
  targetDate: Date;
}

const ButtonAddCourse = (props: ButtonAddCourse) => {
  const panelStore: Store = useRightPanelStore((state: any) => ({ ...state }));

  const onClickAddCourse = () => {
    panelStore.setType(EnumPagesPanel.addCourse);
    panelStore.setAddCourseDefault({
      title: "",
      teacher: "",
      room: "",
      date: "",
      hourFrom: `${props.hour.split("-")[0]}:00`,
      hourTo: `${props.hour.split("-")[1]}:00`,
      links: [],
      notes: "",
      color: "bg-lime-600",
    });
    panelStore.setOpen(true);
  };

  return (
    <button
      onClick={onClickAddCourse}
      className={clsx(
        "h-full w-0 text-3xl text-gray-200 rounded-md flex-1 items-center justify-center flex border border-dashed",
        { hidden: !props.hovered }
      )}
    >
      +
    </button>
  );
};

export default ButtonAddCourse;
