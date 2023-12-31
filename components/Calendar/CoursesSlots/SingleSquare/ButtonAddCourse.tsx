import EnumPagesPanel from "@/enums/enumPagesPanel";
import { colorChoices } from "@/functions/const";
import { getCustomDateFromDate } from "@/functions/datesLib";
import PanelStore from "@/interfaces/panelStore.interface";
import { useRightPanelStore } from "@/store/store";
import clsx from "clsx";

interface ButtonAddCourse {
  hovered: boolean;
  hour: string;
  targetDate: Date;
}

const ButtonAddCourse = (props: ButtonAddCourse) => {
  const panelStore: PanelStore = useRightPanelStore((state: any) => ({
    ...state,
  }));

  const formattedDate = getCustomDateFromDate(props.targetDate ?? new Date());

  const onClickAddCourse = () => {
    panelStore.setType(EnumPagesPanel.addCourse);
    panelStore.setFormContent({
      isCanceled: false,
      title: "",
      teacher: "",
      room: "",
      date: `${formattedDate.year}-${(formattedDate.month + 1)
        .toString()
        .padStart(2, "0")}-${formattedDate.date.toString().padStart(2, "0")}`,
      hourFrom: `${props.hour.split("-")[0]}:00`,
      hourTo: `${props.hour.split("-")[1]}:00`,
      links: [],
      link: "",
      notes: "",
      color: colorChoices[0],
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
