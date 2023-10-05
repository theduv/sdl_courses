interface ButtonSaveProps {
  onClick: () => void;
}

const ButtonSave = (props: ButtonSaveProps) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="rounded-lg px-4 py-2 bg-blue-600 text-white"
    >
      Enregistrer les modifications
    </button>
  );
};

export default ButtonSave;
