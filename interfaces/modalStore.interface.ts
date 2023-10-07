interface ModalStore {
  isOpen: boolean;
  courseID: string;
  childrem: JSX.Element;
  setOpen: (value: boolean) => void;
  setCourseID: (value: string) => void;
  setChildren: (value: JSX.Element) => void;
  setTitle: (value: string) => void;
}

export default ModalStore;
