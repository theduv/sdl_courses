import EnumPagesPanel from "@/enums/enumPagesPanel";
import { colorChoices } from "@/functions/const";
import { getCustomDateFromDate } from "@/functions/datesLib";
import { create } from "zustand";

const today = new Date();
const formattedToday = getCustomDateFromDate(today);

const useRightPanelStore = create((set: any) => ({
  type: EnumPagesPanel.addCourse,
  isOpen: false,
  formContent: {
    isCaneled: false,
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
    color: colorChoices[0],
  },
  setType: (value: EnumPagesPanel) => set({ type: value }),
  setOpen: (value: boolean) => set({ isOpen: value }),
  setFormContent: (value: any) => set({ formContent: value }),
}));

const useModalStore = create((set: any) => ({
  isOpen: false,
  courseID: "",
  title: "",
  children: <div></div>,
  setOpen: (value: boolean) => set({ isOpen: value }),
  setCourseID: (value: string) => set({ courseID: value }),
  setChildren: (value: JSX.Element) => set({ children: value }),
  setTitle: (value: string) => set({ title: value }),
}));

const useConfigStore = create((set: any) => ({
  windowWidth: 0,
  setWindowWidth: (value: number) => set({ windowWidth: value }),
}));

export { useRightPanelStore, useModalStore, useConfigStore };
