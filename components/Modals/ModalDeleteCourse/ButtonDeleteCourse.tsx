import db from "@/firebase/firebaseInit";
import { useModalStore } from "@/store/store";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ButtonDeleteCourse = () => {
  const modalStore = useModalStore((state) => ({ ...state }));

  const onClickDelete = async () => {
    try {
      console.log(modalStore.courseID);
      await deleteDoc(doc(db, "courses", modalStore.courseID));
      modalStore.setOpen(false);
      toast("Cours correctement supprimé.");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      onClick={onClickDelete}
      className="rounded-lg bg-blue-600 px-4 py-2"
    >
      Oui, supprimer le cours
    </button>
  );
};

export default ButtonDeleteCourse;
