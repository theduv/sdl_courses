import ModalDeleteCourse from "@/components/Modals/ModalDeleteCourse/main";
import { useModalStore } from "@/store/store";

interface ButtonDeleteProps {
  courseID?: string;
}

const ButtonDelete = (props: ButtonDeleteProps) => {
  const modalStore = useModalStore((state: any) => ({ ...state }));

  const onClickDelete = async () => {
    try {
      modalStore.setCourseID(props.courseID);
      modalStore.setOpen(true);
      modalStore.setCourseID(props.courseID);
      modalStore.setChildren(<ModalDeleteCourse />);
      modalStore.setTitle("Supprimer un cours");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      type="button"
      onClick={onClickDelete}
      className="bg-red-600 rounded-lg px-4 py-2 text-white"
    >
      Supprimer le cours
    </button>
  );
};

export default ButtonDelete;
