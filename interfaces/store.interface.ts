import EnumPagesPanel from "@/enums/enumPagesPanel";
import Course from "./course.interface";
import CustomDate from "./customDate.interface";
import FormCourse from "./formCourse.interface";

interface Store {
  type: EnumPagesPanel;
  isOpen: boolean;
  formContent: FormCourse;
  setOpen: (value: boolean) => void;
  setFormContent: (value: FormCourse) => void;
  setType: (value: EnumPagesPanel) => void;
}

export default Store;
