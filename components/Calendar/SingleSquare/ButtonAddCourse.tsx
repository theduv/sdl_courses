import EnumPagesPanel from "@/enums/enumPagesPanel";
import { getCustomDateFromDate } from "@/functions/datesLib";
import useRightPanelStore from "@/store/store";
import clsx from "clsx";

interface ButtonAddCourse {
  hovered: boolean;
  hour: string;
  targetDate: Date;
}

const ButtonAddCourse = (props: ButtonAddCourse) => {
  const panelStore = useRightPanelStore((state: any) => ({
    setOpen: state.setOpen,
    setType: state.setType,
    setAddCourseDefault: state.setAddCourseDefault,
  }));
  const formattedDate = props.targetDate
    ? getCustomDateFromDate(props.targetDate)
    : getCustomDateFromDate(new Date());

  const onClickAddCourse = () => {
    panelStore.setType(EnumPagesPanel.addCourse);
    panelStore.setAddCourseDefault({
      date: `${formattedDate.year}-${(formattedDate.month + 1)
        .toString()
        .padStart(2, "0")}-${formattedDate.date.toString().padStart(2, "0")}`,
      timeFrom: `${props.hour.split("-")[0]}:00`,
      timeTo: `${props.hour.split("-")[1]}:00`,
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
