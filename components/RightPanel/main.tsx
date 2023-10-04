import clsx from "clsx";
import AddCourse from "../ContentsPanel/AddCourse/main";
import useRightPanelStore from "@/store/store";
import RightPanelHeader from "./RightPanelHeader";

const RightPanel = () => {
  const panelStore = useRightPanelStore((state: any) => ({ ...state }));

  return (
    <div
      className={clsx(
        "bg-gray-800 fixed right-0 transition ease-in-out rounded-l-lg p-4 flex flex-col space-y-4",
        {
          "ease-in duration-300 translate-x-0 ": panelStore.isOpen,
          "translate-x-full": !panelStore.isOpen,
        }
      )}
      style={{ height: "90%", width: "30%" }}
    >
      <RightPanelHeader />
      <AddCourse />
    </div>
  );
};

export default RightPanel;
