interface ButtonSaveProps {
  onClick: () => {};
}

const ButtonSave = (props: ButtonSaveProps) => {
  return (
    <button
      onClick={props.onClick}
      className="px-4 py-2 rounded-lg bg-blue-600"
    >
      Enregistrer les modifications
    </button>
  );
};

export default ButtonSave;
