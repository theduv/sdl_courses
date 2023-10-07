import { useModalStore } from "@/store/store";

const ButtonCancelDelete = () => {
  const modalStore = useModalStore((state: any) => ({ ...state }));

  const onClickCancel = () => {
    modalStore.setOpen(false);
  };

  return (
    <button
      onClick={onClickCancel}
      className="rounded-lg bg-gray-600 px-4 py-2"
    >
      Annuler
    </button>
  );
};

export default ButtonCancelDelete;
