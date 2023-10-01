"use client";

import CustomInput from "@/components/Global/CustomInput";
import db from "@/firebase/firebaseInit";
import CustomDate from "@/interfaces/customDate.interface";
import clsx from "clsx";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("26-09-2023");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [notes, setNotes] = useState("");
  const [colorText, setColorText] = useState("#000000");
  const [colorBackground, setColorBackground] = useState("#FFFFFF");
  const [pickText, setPickText] = useState<boolean>(false);
  const [pickBackground, setPickBackground] = useState<boolean>(false);
  const refTextPicker = useRef(null);
  const refBackgroundPicker = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (refTextPicker === null || refBackgroundPicker === null) return;
      if (refTextPicker.current && !refTextPicker.current.contains(e.target)) {
        setPickText(false);
      }
      if (
        refBackgroundPicker.current &&
        !refBackgroundPicker.current.contains(e.target)
      ) {
        setPickBackground(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refBackgroundPicker]);

  const onSubmitForm = async (e: any) => {
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
      backgroundColor: colorBackground,
      textColor: colorText,
    });

    setTitle("");
    setNotes("");
  };

  return (
    <div>
      <form
        onSubmit={onSubmitForm}
        className="flex flex-col items-center justify-center space-y-4 p-4"
      >
        <CustomInput
          type="text"
          placeholder="Titre du cours"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></CustomInput>
        <CustomInput
          placeholder="Date du cours"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
        <CustomInput
          value={timeStart}
          onChange={(e) => setTimeStart(e.target.value)}
          placeholder="Heure de début"
          type="time"
          step="3600"
        />
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
          placeholder="Notes additionnelles"
          className="rounded-lg bg-gray-600 p-4 w-full h-64"
        />
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <div>
              <h3
                className="text-blue-500 cursor-pointer underline"
                onClick={() => setPickText(true)}
              >
                Change text color
              </h3>
              <div
                className={clsx("absolute", { hidden: !pickText })}
                ref={refTextPicker}
              >
                <HexColorPicker color={colorText} onChange={setColorText} />
              </div>
            </div>
            <div>
              <h3
                className="text-blue-500 cursor-pointer underline"
                onClick={() => setPickBackground(true)}
              >
                Change background color
              </h3>
              <div
                className={clsx("absolute", { hidden: !pickBackground })}
                ref={refBackgroundPicker}
              >
                <HexColorPicker
                  color={colorBackground}
                  onChange={setColorBackground}
                />
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: colorBackground, color: colorText }}
            className="rounded-lg px-4 py-2 p-1"
          >
            {title.length ? title : "Example"}
          </div>
        </div>
        <button type="submit" className="rounded-lg px-6 py-2 bg-gray-600">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
