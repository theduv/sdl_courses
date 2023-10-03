interface ButtonSaveProps {
  onClick: () => {};
}

const ButtonSave = (props: ButtonSaveProps) => {
  return (
    <button
      onClick={props.onClick}
      className="px-4 py-2 rounded-lg font-bold bg-gray-300 text-gray-800"
    >
      Enregistrer
    </button>
  );
};

export default ButtonSave;
