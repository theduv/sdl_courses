import useRightPanelStore from "@/store/store";
import { useState } from "react";
import ButtonSave from "./ButtonSave";
import ButtonDelete from "./ButtonDelete";

const SingleCourseDetails = () => {
  const panelStore = useRightPanelStore((state: any) => ({
    courseDetailsDefault: state.courseDetailsDefault,
  }));

  const [notesValue, setNotesValue] = useState(
    panelStore.courseDetailsDefault.notes
  );
  const [titleValue, setTitleValue] = useState(
    panelStore.courseDetailsDefault.title
  );

  const onChangeValueNotes = (e: any) => {
    setNotesValue(e.target.value);
  };

  const onChangeValueTitle = (e: any) => {
    setTitleValue(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <label>
        <h1>Titre</h1>
        <input
          className="rounded-lg bg-gray-600 text-gray-200 p-2 text-xl"
          value={titleValue}
          onChange={onChangeValueTitle}
        />
      </label>
      <h3>Notes</h3>
      <textarea
        value={notesValue}
        onChange={onChangeValueNotes}
        className="rounded-lg bg-gray-600 p-4 w-full h-32"
      />
      <div className="flex justify-between">
        <ButtonSave />
        <ButtonDelete courseID={panelStore.courseDetailsDefault.id} />
      </div>
    </div>
  );
};

export default SingleCourseDetails;
