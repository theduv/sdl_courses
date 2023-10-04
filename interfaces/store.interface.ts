import EnumPagesPanel from "@/enums/enumPagesPanel";
import Course from "./course.interface";
import CustomDate from "./customDate.interface";
import FormCourse from "./formCourse.interface";

interface Store {
  type: EnumPagesPanel;
  isOpen: boolean;
  addCourseDefault: FormCourse;
  setOpen: (value: boolean) => void;
  setAddCourseDefault: (value: FormCourse) => void;
  setType: (value: EnumPagesPanel) => void;
}

export default Store;
