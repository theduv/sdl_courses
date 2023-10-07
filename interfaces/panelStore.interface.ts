import EnumPagesPanel from "@/enums/enumPagesPanel";
import FormCourse from "./formCourse.interface";

interface PanelStore {
  type: EnumPagesPanel;
  isOpen: boolean;
  formContent: FormCourse;
  setOpen: (value: boolean) => void;
  setFormContent: (value: FormCourse) => void;
  setType: (value: EnumPagesPanel) => void;
}

export default PanelStore;
