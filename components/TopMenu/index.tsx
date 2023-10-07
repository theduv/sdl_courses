import { Dispatch, SetStateAction } from "react";
import ButtonCalendar from "./ButtonCalendar";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { useRightPanelStore } from "@/store/store";
import { getCustomDateFromDate } from "@/functions/datesLib";
import { AiFillGithub } from "react-icons/ai";

interface TopMenuProps {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

const TopMenu = (props: TopMenuProps) => {
  const panelStore = useRightPanelStore((state: any) => ({ ...state }));
  const currentDate = new Date();
  const formattedDate = getCustomDateFromDate(currentDate);

  const onClickAddCourse = () => {
    panelStore.setAddCourseDefault({
      date: `${formattedDate.year}-${(formattedDate.month - 1)
        .toString()
        .padStart(2, "0")}-${formattedDate.date.toString().padStart(2, "0")}`,
      timeFrom: "08:00",
      timeTo: "09:00",
    });
    panelStore.setType(EnumPagesPanel.addCourse);
    panelStore.setOpen(true);
  };

  return (
    <div className="flex items-center justify-between w-full px-8">
      <a href="https://www.github.com/theduv/sdl_courses" target="_blank">
        <AiFillGithub size={40} />
      </a>
      <div className="flex items-center space-x-6">
        <button
          onClick={() =>
            props.setCurrentDate((oldDate) => {
              const oneLessWeek = new Date(oldDate);
              oneLessWeek.setDate(oldDate.getDate() - 7);
              return oneLessWeek;
            })
          }
        >
          <VscTriangleLeft size={33} color={"rgb(229,231,235)"} />
        </button>
        <ButtonCalendar text="Ajouter un cours" onClick={onClickAddCourse} />
        <button
          onClick={() =>
            props.setCurrentDate((oldDate) => {
              const oneMoreWeek = new Date(oldDate);
              oneMoreWeek.setDate(oldDate.getDate() + 7);
              return oneMoreWeek;
            })
          }
        >
          <VscTriangleRight size={33} color={"rgb(229,231,235)"} />
        </button>
      </div>

      <div />
    </div>
  );
};

export default TopMenu;
