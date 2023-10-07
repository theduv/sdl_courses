import { useModalStore } from "@/store/store";
import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "50%",
    width: "50%",
    backgroundColor: "#1f2937",
    borderRadius: 10,
  },
};

Modal.setAppElement("#mainCalendar");

const GlobalModal = () => {
  const modalStore = useModalStore((state: any) => ({ ...state }));

  const openModal = () => {
    modalStore.setOpen(true);
  };

  const closeModal = () => {
    modalStore.setOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalStore.isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-center">
            <div />
            <h1 className="text-2xl">{modalStore.title}</h1>
            <button onClick={closeModal}>X</button>
          </div>
          {modalStore.children}
        </div>
      </Modal>
    </div>
  );
};

export default GlobalModal;
