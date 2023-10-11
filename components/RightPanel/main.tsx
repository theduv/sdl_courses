import clsx from "clsx";
import AddCourse from "./RightPanelContent/main";
import RightPanelHeader from "./RightPanelHeader";
import { useRightPanelStore } from "@/store/store";
import { useEffect, useRef } from "react";

const RightPanel = () => {
  const panelStore = useRightPanelStore((state: any) => ({ ...state }));
  const refTop = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    refTop.current?.scrollTo(0, 0); // reset scrolling to top when changing panel content
  }, [panelStore.formContent]);

  return (
    <div
      ref={refTop}
      className={clsx(
        "bg-gray-800 border border-gray-500 overflow-y-auto fixed right-0 h-4/5 w-2/5 transition ease-in-out rounded-l-lg flex flex-col scrollbar scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-track-gray-100 scrollbar-track-rounded ",
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
