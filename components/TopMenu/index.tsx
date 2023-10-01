import { Dispatch, SetStateAction } from "react";
import ButtonCalendar from "./ButtonCalendar";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

interface TopMenuProps {
  setOpenRightPanel: Dispatch<SetStateAction<boolean>>;
  setContentRightPanel: Dispatch<SetStateAction<EnumPagesPanel | null>>;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

const TopMenu = (props: TopMenuProps) => {
  const onClickAddCourse = () => {
    props.setOpenRightPanel(true);
    props.setContentRightPanel(EnumPagesPanel.addCourse);
  };

  return (
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
  );
};

export default TopMenu;
