"use client";

import CustomInput from "@/components/Global/CustomInput";
import db from "@/firebase/firebaseInit";
import CustomDate from "@/interfaces/customDate.interface";
import Store from "@/interfaces/store.interface";
import { toast } from "react-toastify";
import useRightPanelStore from "@/store/store";
import clsx from "clsx";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Divider from "./Divider";
import ColorPicker from "./ColorPicker";
import EnumPagesPanel from "@/enums/enumPagesPanel";
import FormCourse from "@/interfaces/formCourse.interface";
import ButtonSave from "../SingleCourseDetails/ButtonSave";
import ButtonDelete from "../SingleCourseDetails/ButtonDelete";

const AddCourse = () => {
  const panelStore: Store = useRightPanelStore((state: any) => ({ ...state }));

  console.log(panelStore);

  const [formValues, setFormValues] = useState<FormCourse>({
    ...panelStore.addCourseDefault,
  });

  const resetForm = () => {
    setFormValues({ ...panelStore.addCourseDefault });
  };

  const onClickAddLink = () => {
    setFormValues((oldForm: FormCourse) => ({
      ...oldForm,
      link: "",
      links: [...oldForm.links, formValues.link],
    }));
  };

  useEffect(() => {
    setFormValues(panelStore.addCourseDefault);
  }, [panelStore.addCourseDefault]);

  const onChangeLinkValue = (e: any) => {
    setFormValues((oldForm) => ({ ...oldForm, link: e.target.value }));
  };

  const onClickSaveChanges = async () => {
    try {
      if (panelStore.addCourseDefault.id == undefined) return;
      const ref = doc(db, "courses", panelStore.addCourseDefault.id);
      await updateDoc(ref, {
        teacher: formValues.teacher,
        room: formValues.room,
        notes: formValues.notes,
        title: formValues.title,
        links: formValues.links.join(";"),
        color: formValues.color,
      });
      toast("Cours correctement modifié.");
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitForm = async (e: any) => {
    try {
      e.preventDefault();
      const dateStart: CustomDate = {
        date: parseInt(formValues.date.split("-")[2]),
        month: parseInt(formValues.date.split("-")[1]) - 1,
        year: parseInt(formValues.date.split("-")[0]),
        hour: parseInt(formValues.hourFrom.split(":")[0]),
      };

      const dateEnd: CustomDate = {
        date: parseInt(formValues.date.split("-")[2]),
        month: parseInt(formValues.date.split("-")[1]) - 1,
        year: parseInt(formValues.date.split("-")[0]),
        hour: parseInt(formValues.hourTo.split(":")[0]),
      };

      if (panelStore.type === EnumPagesPanel.addCourse) {
        await addDoc(collection(db, "courses"), {
          title: formValues.title,
          notes: formValues.notes,
          timeFrom: JSON.stringify(dateStart),
          timeTo: JSON.stringify(dateEnd),
          color: formValues.color,
          links: formValues.links.join(";"),
        });
        toast("Cours correctement ajouté.");
      } else {
        if (panelStore.addCourseDefault.id) {
          const ref = doc(db, "courses", panelStore.addCourseDefault.id);
          const dateFrom = {
            year: formValues.date.split("-")[0],
            month: parseInt(formValues.date.split("-")[1]) - 1,
            date: parseInt(formValues.date.split("-")[2]),
            hour: formValues.hourFrom,
          };
          const dateTo = {
            year: formValues.date.split("-")[0],
            month: parseInt(formValues.date.split("-")[1]) - 1,
            date: parseInt(formValues.date.split("-")[2]),
            hour: formValues.hourTo,
          };

          await updateDoc(ref, {
            room: formValues.room,
            teacher: formValues.teacher,
            notes: formValues.notes,
            timeFrom: JSON.stringify(dateFrom),
            timeTo: JSON.stringify(dateTo),
            title: formValues.title,
            links: formValues.links.join(";"),
            color: formValues.color,
          });
          toast("Cours correctement modifié.");
        }
      }
      resetForm();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="flex flex-col p-4 justify-center space-y-2 scrollbar scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-track-gray-100 scrollbar-track-rounded"
    >
      <CustomInput
        type="text"
        placeholder="Titre du cours"
        value={formValues.title}
        onChange={(e) =>
          setFormValues((oldForm) => ({ ...oldForm, title: e.target.value }))
        }
      ></CustomInput>
      <Divider />
      <CustomInput
        type="text"
        placeholder="Professeur.e"
        value={formValues.teacher}
        onChange={(e) =>
          setFormValues((oldForm) => ({ ...oldForm, teacher: e.target.value }))
        }
      />
      <Divider />
      <CustomInput
        type="text"
        placeholder="Salle / amphithéâtre"
        value={formValues.room}
        onChange={(e) =>
          setFormValues((oldForm) => ({ ...oldForm, room: e.target.value }))
        }
      />
      <Divider />
      <CustomInput
        placeholder="Date du cours"
        value={formValues.date}
        onChange={(e) =>
          setFormValues((oldForm) => ({ ...oldForm, date: e.target.value }))
        }
        type="date"
      />
      <Divider />
      <CustomInput
        value={formValues.hourFrom}
        onChange={(e) =>
          setFormValues((oldForm) => ({ ...oldForm, hourFrom: e.target.value }))
        }
        placeholder="Heure de début"
        type="time"
        step="3600"
      />
      <Divider />
      <CustomInput
        value={formValues.hourTo}
        onChange={(e) =>
          setFormValues((oldForm) => ({ ...oldForm, hourTo: e.target.value }))
        }
        placeholder="Heure de fin"
        type="time"
        step="3600"
      />
      <Divider />
      <label className="flex flex-col space-y-2">
        <h2>Notes additionnelles</h2>
        <textarea
          value={formValues.notes}
          onChange={(e) =>
            setFormValues((oldForm) => ({ ...oldForm, notes: e.target.value }))
          }
          placeholder="Notes additionnelles (prof absent, changement de salle...)"
          className="rounded-lg bg-gray-600 p-4 w-full h-32"
        />
      </label>
      <Divider />
      <div className="flex flex-col space-y-4">
        <h2>Lien(s) vers les prises de notes</h2>
        {formValues.links && formValues.links.length !== 0 ? (
          <div className="flex flex-col h-8 overflow-y-auto border rounded lg p-1 border-opacity-40 border-white w-1/2 truncate ">
            {formValues.links.map((link) => (
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
        <label className="flex w-full items-center space-x-3">
          <input
            value={formValues.link}
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
        <ColorPicker
          color={formValues.color}
          setColor={(newColor: string) =>
            setFormValues((oldForm) => ({ ...oldForm, color: newColor }))
          }
        />
      </div>
      <Divider />
      {panelStore.type === EnumPagesPanel.addCourse ? (
        <button
          disabled={formValues.title.length === 0}
          type="submit"
          className={clsx("rounded-lg w-1/2 px-6 py-2", {
            "bg-gray-300 cursor-default text-gray-400":
              formValues.title.length === 0,
            "bg-blue-600": formValues.title.length !== 0,
          })}
        >
          Ajouter le cours
        </button>
      ) : (
        <div className="flex space-x-4">
          <ButtonSave onClick={onClickSaveChanges} />
          <ButtonDelete courseID={panelStore.addCourseDefault.id} />
        </div>
      )}
    </form>
  );
};

export default AddCourse;
