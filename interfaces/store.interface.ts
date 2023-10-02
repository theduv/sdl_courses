import EnumPagesPanel from "@/enums/enumPagesPanel";

interface Store {
  type: EnumPagesPanel;
  isOpen: boolean;
  addCourseDefault: {
    date: string;
    timeFrom: string;
    timeTo: string;
  };
}

export default Store;
