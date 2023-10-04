"use client";
import { getWeekAtDate } from "@/functions/datesLib";
import Course from "@/interfaces/course.interface";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from "@/firebase/firebaseInit";
import TopDates from "./TopDates/main";
import CoursesSlot from "./CoursesSlots/main";

interface CalendarProps {
  currentDate: Date;
}

const Calendar = (props: CalendarProps) => {
  const [displayedDates, setDisplayedDates] = useState<Array<Date>>([]);
  const [coursesList, setCoursesList] = useState<Array<Course>>([]);

  useEffect(() => {
    const q = query(collection(db, "courses"));
    const unsub = onSnapshot(q, (snap) => {
      const newDocs = snap.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        notes: doc.data().notes,
        timeFrom: JSON.parse(doc.data().timeFrom),
        timeTo: JSON.parse(doc.data().timeTo),
        links: doc.data().links,
        color: doc.data().color,
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
      <CoursesSlot displayedDates={displayedDates} coursesList={coursesList} />
    </div>
  );
};

export default Calendar;
