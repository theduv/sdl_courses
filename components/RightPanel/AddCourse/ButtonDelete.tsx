import EnumPagesPanel from "@/enums/enumPagesPanel";
import db from "@/firebase/firebaseInit";
import useRightPanelStore from "@/store/store";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

interface ButtonDeleteProps {
  courseID?: string;
}

const ButtonDelete = (props: ButtonDeleteProps) => {
  const panelStore = useRightPanelStore((state: any) => ({ ...state }));

  const onClickDeleteCourse = async () => {
    try {
      if (props.courseID == undefined) return;
      await deleteDoc(doc(db, "courses", props.courseID));
      toast("Cours correctement supprimé.");
      panelStore.setType(EnumPagesPanel.addCourse);
      panelStore.setOpen(false);
    } catch (e) {}
  };

  return (
    <button
      type="button"
      onClick={onClickDeleteCourse}
      className="px-4 py-2 rounded-lg bg-red-600"
    >
      Supprimer le cours
    </button>
  );
};

export default ButtonDelete;
