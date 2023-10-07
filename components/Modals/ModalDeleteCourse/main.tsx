import ButtonCancelDelete from "./ButtonCancelDelete";
import ButtonDeleteCourse from "./ButtonDeleteCourse";

const ModalDeleteCourse = () => {
  return (
    <div className="flex flex-col space-y-4 h-full ">
      <h2>Êtes-vous sûr.e de vouloir supprimer ce cours ?</h2>
      <div className="flex space-x-4">
        <ButtonDeleteCourse />
        <ButtonCancelDelete />
      </div>
    </div>
  );
};

export default ModalDeleteCourse;
