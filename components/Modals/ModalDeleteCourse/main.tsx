import { useModalStore } from "@/store/store";
import { deleteDoc } from "firebase/firestore/lite";
import db from "@/firebase/firebaseInit";
import { toast } from "react-toastify";
import { doc } from "firebase/firestore";
import Button from "@/components/Global/Button";
import EnumButtonType from "@/enums/enumButtonType";

const ModalDeleteCourse = () => {
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

  const onClickCancel = () => {
    modalStore.setOpen(false);
  };

  return (
    <div className="flex flex-col space-y-4 h-full ">
      <h2>Êtes-vous sûr.e de vouloir supprimer ce cours ?</h2>
      <div className="flex space-x-4">
        <Button
          onClick={onClickDelete}
          type={EnumButtonType.default}
          content="Oui, supprimer le cours"
        />
        <Button
          onClick={onClickCancel}
          type={EnumButtonType.cancel}
          content="Annuler"
        />
      </div>
    </div>
  );
};

export default ModalDeleteCourse;
