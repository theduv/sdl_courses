import useRightPanelStore from "@/store/store";
import { useEffect, useState } from "react";
import ButtonSave from "./ButtonSave";
import ButtonDelete from "./ButtonDelete";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import db from "@/firebase/firebaseInit";
import { toast } from "react-toastify";
import CustomInput from "@/components/Global/CustomInput";
import Divider from "../AddCourse/Divider";

const SingleCourseDetails = () => {
  const panelStore = useRightPanelStore((state: any) => ({
    courseDetailsDefault: state.courseDetailsDefault,
  }));

  const [linkValue, setLinkValue] = useState<string>("");
  const [notesValue, setNotesValue] = useState<string>(
    panelStore.courseDetailsDefault.notes
  );

  const [links, setLinks] = useState<Array<string>>(
    panelStore.courseDetailsDefault.links
      ? panelStore.courseDetailsDefault.links.split(";")
      : []
  );

  const [titleValue, setTitleValue] = useState<string>(
    panelStore.courseDetailsDefault.title
  );

  const onClickAddLink = () => {
    setLinks((oldLinks: Array<string>) => [...oldLinks, linkValue]);
    setLinkValue("");
  };
  const onChangeValueNotes = (e: any) => {
    setNotesValue(e.target.value);
  };

  const onChangeValueTitle = (e: any) => {
    setTitleValue(e.target.value);
  };

  const onChangeLinkValue = (e: any) => {
    setLinkValue(e.target.value);
  };

  useEffect(() => {
    setLinks(
      panelStore.courseDetailsDefault.links
        ? panelStore.courseDetailsDefault.links.split(";")
        : []
    );
    setTitleValue(panelStore.courseDetailsDefault.title);
    setNotesValue(panelStore.courseDetailsDefault.notes);
  }, [panelStore.courseDetailsDefault]);

  const onClickSave = async () => {
    try {
      const ref = doc(db, "courses", panelStore.courseDetailsDefault.id);
      await updateDoc(ref, {
        notes: notesValue,
        title: titleValue,
        links: links.join(";"),
      });
      toast("Cours correctement modifié.");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      <CustomInput
        type="text"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
        placeholder="Titre du cours"
      />
      <Divider />
      <h3>Notes</h3>
      <textarea
        placeholder="Notes additionnelles (prof absent, changement de salle...)"
        value={notesValue}
        onChange={onChangeValueNotes}
        className="rounded-lg bg-gray-600 p-4 w-full h-32"
      />
      <Divider />
      <div>Lien(s) vers les prises de notes</div>
      {links && links.length !== 0 ? (
        links.map((link: string) => (
          <a href={link} target="blank" className="text-blue-600 underline">
            {link}
          </a>
        ))
      ) : (
        <h2 className="italic text-sm">
          Aucun lien n'a encore été posté pour ce cours.
        </h2>
      )}
      <div className="flex space-x-6 items-center">
        <h1>Ajouter un lien</h1>
        <div className="flex space-x-2">
          <input
            placeholder="Lien google drive, dropbox..."
            value={linkValue}
            onChange={onChangeLinkValue}
            type="url"
            className="px-4 py-2 rounded-lg bg-gray-600 text-gray-200"
          />
          <button className="text-2xl" onClick={onClickAddLink}>
            +
          </button>
        </div>
      </div>
      <Divider />
      <div className="flex space-x-4">
        <ButtonSave onClick={onClickSave} />
        <ButtonDelete courseID={panelStore.courseDetailsDefault.id} />
      </div>
    </div>
  );
};

export default SingleCourseDetails;
