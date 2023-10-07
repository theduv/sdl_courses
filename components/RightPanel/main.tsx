import clsx from "clsx";
import AddCourse from "./RightPanelContent/main";
import { useRightPanelStore } from "@/store/store";
import RightPanelHeader from "./RightPanelHeader";

const RightPanel = () => {
  const panelStore = useRightPanelStore((state: any) => ({ ...state }));

  return (
    <div
      className={clsx(
        "bg-gray-800 overflow-y-auto fixed right-0 h-4/5 w-2/5 transition ease-in-out rounded-l-lg flex flex-col scrollbar scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-track-gray-100 scrollbar-track-rounded ",
        {
          "ease-in duration-300 translate-x-0 ": panelStore.isOpen,
          "translate-x-full": !panelStore.isOpen,
        }
      )}
    >
      <RightPanelHeader />
      <AddCourse />
    </div>
  );
};

export default RightPanel;
