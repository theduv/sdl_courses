import useRightPanelStore from "@/store/store";
import { useState } from "react";
import ButtonSave from "./ButtonSave";
import ButtonDelete from "./ButtonDelete";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import db from "@/firebase/firebaseInit";

const SingleCourseDetails = () => {
  const panelStore = useRightPanelStore((state: any) => ({
    courseDetailsDefault: state.courseDetailsDefault,
  }));

  const [notesValue, setNotesValue] = useState(
    panelStore.courseDetailsDefault.notes
  );

  const links = panelStore.courseDetailsDefault.links
    ? panelStore.courseDetailsDefault.links.split(";")
    : [];

  const [titleValue, setTitleValue] = useState(
    panelStore.courseDetailsDefault.title
  );

  const onChangeValueNotes = (e: any) => {
    setNotesValue(e.target.value);
  };

  const onChangeValueTitle = (e: any) => {
    setTitleValue(e.target.value);
  };

  const onClickSave = async () => {
    try {
      const ref = doc(db, "courses", panelStore.courseDetailsDefault.id);
      await updateDoc(ref, { notes: notesValue, title: titleValue });
    } catch (e) {
      console.log(e);
    }
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
      <div>Liens vers les prises de notes</div>
      <ul>
        {panelStore.courseDetailsDefault.links ? (
          links.map((link: string) => (
            <li>
              <a href={link} target="blank" className="text-blue-600 underline">
                {link}
              </a>
            </li>
          ))
        ) : (
          <h2 className="italic text-sm">
            Aucun lien n'a encore été posté pour ce cours.
          </h2>
        )}
      </ul>
      <div className="flex justify-between">
        <ButtonSave onClick={onClickSave} />
        <ButtonDelete courseID={panelStore.courseDetailsDefault.id} />
      </div>
    </div>
  );
};

export default SingleCourseDetails;
