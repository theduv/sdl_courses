import EnumPagesPanel from "@/enums/enumPagesPanel";
import { getCustomDateFromDate } from "@/functions/datesLib";
import AddCourseDefault from "@/interfaces/addCourseDefault.interface";
import DetailsCourseDefault from "@/interfaces/detailsCourseDefault.interface";
import { create } from "zustand";

const today = new Date();
const formattedToday = getCustomDateFromDate(today);

const useRightPanelStore = create((set) => ({
  type: EnumPagesPanel.addCourse,
  isOpen: false,
  addCourseDefault: {
    date: `${formattedToday.year}-${(formattedToday.month + 1)
      .toString()
      .padStart(2, "0")}-${formattedToday.date.toString().padStart(2, "0")}`,
    timeFrom: "08:00",
    timeTo: "09:00",
  },
  courseDetailsDefault: {
    title: "Unknown",
    notes: "",
  },
  setType: (value: EnumPagesPanel) => set({ type: value }),
  setOpen: (value: boolean) => set({ isOpen: value }),
  setAddCourseDefault: (value: AddCourseDefault) =>
    set({ addCourseDefault: value }),
  setCourseDetailsDefault: (value: DetailsCourseDefault) =>
    set({ courseDetailsDefault: value }),
}));

export default useRightPanelStore;
