"use client";
import {
  arrayDays,
  arrayHours,
  arrayMonths,
  getWeekAtDate,
} from "@/functions/datesLib";
import Course from "@/interfaces/course.interface";
import { Fragment, useEffect, useState } from "react";
import SingleSquare from "./SingleSquare/main";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from "@/firebase/firebaseInit";
import EnumPagesPanel from "@/enums/enumPagesPanel";

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
        textColor: doc.data().textColor,
        links: doc.data().links,
        backgroundColor: doc.data().backgroundColor,
      }));
      const removedDuplicates: Array<any> = [];
      newDocs.forEach((doc) => {
        if (removedDuplicates.find((docSecond) => doc.id === docSecond.id))
          return;
        removedDuplicates.push(doc);
      });
      setCoursesList((oldList) => [...removedDuplicates]);
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
      {displayedDates.map((date: Date, index: number) => {
        return (
          <div
            className="text-center w-52 font-bold mb-6 bg-orange-500 p-2 rounded-md text-white border border-gray-700  "
            key={date.getTime()}
          >
            {arrayDays[index]} {date.getDate()}{" "}
            {arrayMonths[date.getMonth()].substring(0, 3)}.
          </div>
        );
      })}
      {arrayHours.map((hour: string, index: number) => {
        return (
          <Fragment key={hour}>
            <div className="items-center flex justify-center">{hour}</div>
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={0}
            />
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={1}
            />
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={2}
            />
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={3}
            />
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={4}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Calendar;
