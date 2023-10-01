"use client";

import CustomInput from "@/components/Global/CustomInput";
import { useState } from "react";

const AddCourse = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <form className="flex flex-col items-center justify-center space-y-4 p-4">
        <CustomInput
          type="text"
          placeholder="Titre du cours"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></CustomInput>
        <CustomInput placeholder="Date du cours" type="date" />
        <CustomInput placeholder="Heure de début" type="time" step="3600" />
        <CustomInput placeholder="Heure de fin" type="time" step="3600" />
        <textarea
          placeholder="Notes additionnelles"
          className="rounded-lg bg-gray-600 p-4 w-full h-64"
        />
        <button type="submit" className="rounded-lg px-6 py-2 bg-gray-600">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
