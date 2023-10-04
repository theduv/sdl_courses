"use client";

import CustomInput from "@/components/Global/CustomInput";
import db from "@/firebase/firebaseInit";
import CustomDate from "@/interfaces/customDate.interface";
import Store from "@/interfaces/store.interface";
import { toast } from "react-toastify";
import useRightPanelStore from "@/store/store";
import clsx from "clsx";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Divider from "./Divider";
import ColorPicker from "./ColorPicker";

const AddCourse = () => {
  const panelStore: Store = useRightPanelStore((state: any) => ({ ...state }));
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<string>(panelStore.addCourseDefault.date);
  const [timeStart, setTimeStart] = useState<string>(
    panelStore.addCourseDefault.timeFrom
  );
  const [timeEnd, setTimeEnd] = useState(panelStore.addCourseDefault.timeTo);
  const [notes, setNotes] = useState("");
  const [links, setLinks] = useState<Array<string>>([]);
  const [linkValue, setLinkValue] = useState<string>("");
  const [color, setColor] = useState<string>("bg-lime-700");

  const resetForm = () => {
    setTitle("");
    setNotes("");
    setColor("bg-lime-600");
    toast("Cours correctement ajouté");
    setLinks([]);
  };

  const onClickAddLink = () => {
    setLinks((oldLinks) => [...oldLinks, linkValue]);
    setLinkValue("");
  };

  useEffect(() => {
    setDate(panelStore.addCourseDefault.date);
    setTimeStart(panelStore.addCourseDefault.timeFrom);
    setTimeEnd(panelStore.addCourseDefault.timeTo);
  }, [panelStore.addCourseDefault]);

  const onChangeLinkValue = (e: any) => {
    setLinkValue(e.target.value);
  };

  const onSubmitForm = async (e: any) => {
    try {
      e.preventDefault();
      const dateStart: CustomDate = {
        date: parseInt(date.split("-")[2]),
        month: parseInt(date.split("-")[1]) - 1,
        year: parseInt(date.split("-")[0]),
        hour: parseInt(timeStart.split(":")[0]),
      };

      const dateEnd: CustomDate = {
        date: parseInt(date.split("-")[2]),
        month: parseInt(date.split("-")[1]) - 1,
        year: parseInt(date.split("-")[0]),
        hour: parseInt(timeEnd.split(":")[0]),
      };

      await addDoc(collection(db, "courses"), {
        title,
        notes: notes,
        timeFrom: JSON.stringify(dateStart),
        timeTo: JSON.stringify(dateEnd),
        color: color,
        links: links.join(";"),
      });
      resetForm();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="flex flex-col justify-center space-y-2 p-4"
    >
      <CustomInput
        type="text"
        placeholder="Titre du cours"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></CustomInput>
      <Divider />
      <CustomInput
        placeholder="Date du cours"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
      <Divider />
      <CustomInput
        value={timeStart}
        onChange={(e) => setTimeStart(e.target.value)}
        placeholder="Heure de début"
        type="time"
        step="3600"
      />
      <Divider />
      <CustomInput
        value={timeEnd}
        onChange={(e) => setTimeEnd(e.target.value)}
        placeholder="Heure de fin"
        type="time"
        step="3600"
      />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes additionnelles (prof absent, changement de salle...)"
        className="rounded-lg bg-gray-600 p-4 w-full h-32"
      />
      <Divider />
      <div className="flex flex-col space-y-4">
        <h2>Lien(s) vers les prises de notes</h2>
        {links.length !== 0 ? (
          <div className="flex flex-col h-8 overflow-y-auto border rounded lg p-1 border-opacity-40 border-white w-1/2 truncate ">
            {links.map((link) => (
              <a
                className="text-blue-600 underline text-sm"
                href="link"
                key={`Link to ${link}`}
              >
                {link}
              </a>
            ))}
          </div>
        ) : (
          <h4 className="italic text-sm">
            Aucun lien n'a encore été posté pour ce cours.
          </h4>
        )}
        <label className="flex w-full justify-between items-center space-x-3">
          <input
            value={linkValue}
            onChange={onChangeLinkValue}
            type="url"
            className="rounded-lg bg-gray-600 px-4 py-2 w-4/5"
            placeholder="Lien google drive, dropbox..."
          />
          <button className="text-2xl" onClick={onClickAddLink} type="button">
            +
          </button>
        </label>
      </div>
      <Divider />
      <div className="flex w-full justify-between items-center">
        <ColorPicker color={color} setColor={setColor} />
      </div>
      <Divider />
      <button
        disabled={title.length === 0}
        type="submit"
        className={clsx("rounded-lg w-1/2 px-6 py-2", {
          "bg-gray-300 cursor-default text-gray-400": title.length === 0,
          "bg-blue-600": title.length !== 0,
        })}
      >
        Ajouter le cours
      </button>
    </form>
  );
};

export default AddCourse;
