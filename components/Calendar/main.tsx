"use client";
import { getWeekAtDate } from "@/functions/datesLib";
import Course from "@/interfaces/course.interface";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from "@/firebase/firebaseInit";
import TopDates from "./TopDates/main";
import CoursesSlots from "./CoursesSlots/main";
import GlobalModal from "../Global/GlobalModal";

interface CalendarProps {
  currentDate: Date;
}

const Calendar = (props: CalendarProps) => {
  const [displayedDates, setDisplayedDates] = useState<Array<Date>>([]);
  const [coursesList, setCoursesList] = useState<Array<Course>>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const q = query(collection(db, "courses"));
    const unsub = onSnapshot(q, (snap) => {
      const newDocs = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timeFrom: JSON.parse(doc.data().timeFrom),
        timeTo: JSON.parse(doc.data().timeTo),
      }));
      const removedDuplicates: Array<any> = [];
      newDocs.forEach((doc) => {
        if (removedDuplicates.find((docSecond) => doc.id === docSecond.id))
          return;
        removedDuplicates.push(doc);
      });
      setCoursesList(removedDuplicates);
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    setDisplayedDates(getWeekAtDate(props.currentDate));
  }, [props.currentDate]);

  return (
    <div className="grid grid-cols-6">
      <div />
      <TopDates displayedDates={displayedDates} />
      <CoursesSlots displayedDates={displayedDates} coursesList={coursesList} />
      <GlobalModal />
    </div>
  );
};

export default Calendar;
