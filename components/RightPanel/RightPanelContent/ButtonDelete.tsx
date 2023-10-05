interface ButtonDeleteProps {
  courseID?: string;
}

const ButtonDelete = (props: ButtonDeleteProps) => {
  return (
    <button
      type="button"
      onClick={() => {}}
      className="bg-red-600 rounded-lg px-4 py-2 text-white"
    >
      Supprimer le cours
    </button>
  );
};

export default ButtonDelete;
