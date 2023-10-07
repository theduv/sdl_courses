import EnumPagesPanel from "@/enums/enumPagesPanel";
import { getCustomDateFromDate } from "@/functions/datesLib";
import { create } from "zustand";

const today = new Date();
const formattedToday = getCustomDateFromDate(today);

const useRightPanelStore = create((set: any) => ({
  type: EnumPagesPanel.addCourse,
  isOpen: false,
  formContent: {
    title: "",
    teacher: "",
    room: "",
    notes: "",
    date: `${formattedToday.year}-${(formattedToday.month + 1)
      .toString()
      .padStart(2, "0")}-${formattedToday.date.toString().padStart(2, "0")}`,
    hourFrom: "08:00",
    hourTo: "09:00",
    links: [],
    color: "bg-lime-700",
  },
  setType: (value: EnumPagesPanel) => set({ type: value }),
  setOpen: (value: boolean) => set({ isOpen: value }),
  setFormContent: (value: any) => set({ formContent: value }),
}));

export default useRightPanelStore;
