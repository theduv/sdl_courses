"use client";
import { arrayHours, arrayMonths, getWeekAtDate } from "@/functions/datesLib";
import { GetCourseAtTime } from "@/functions/getCourseAtTime";
import Course from "@/interfaces/course.interface";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import SingleSquare from "./SingleSquare";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import db from "@/firebase/firebaseInit";
import EnumPagesPanel from "@/enums/enumPagesPanel";

interface CalendarProps {
  currentDate: Date;
  setOpenRightPanel: Dispatch<SetStateAction<boolean>>;
  setDetailsRightPanel: Dispatch<SetStateAction<Course | null>>;
  setContentRightPanel: Dispatch<SetStateAction<EnumPagesPanel | null>>;
}

const Calendar = (props: CalendarProps) => {
  const [displayedDates, setDisplayedDates] = useState<Array<Date>>([]);
  const [coursesList, setCoursesList] = useState<Array<Course>>([]);

  const fetchCourses = async () => {
    const query = await getDocs(collection(db, "courses"));
    const arrayCourses: Array<Course> = [];
    query.forEach((doc) => {
      arrayCourses.push({
        title: doc.data().title,
        notes: doc.data().notes,
        timeFrom: JSON.parse(doc.data().timeFrom),
        timeTo: JSON.parse(doc.data().timeTo),
        textColor: doc.data().textColor,
        backgroundColor: doc.data().backgroundColor,
      });
    });
    setCoursesList(arrayCourses);
  };

  useEffect(() => {
    const q = query(collection(db, "courses"));
    const unsub = onSnapshot(q, (snap) => {
      const newDocs = snap.docs.map((doc) => ({
        title: doc.data().title,
        notes: doc.data().notes,
        timeFrom: JSON.parse(doc.data().timeFrom),
        timeTo: JSON.parse(doc.data().timeTo),
        textColor: doc.data().textColor,
        backgroundColor: doc.data().backgroundColor,
      }));
      setCoursesList((oldList) => [...oldList, ...newDocs]);
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
      {displayedDates.map((date: Date) => {
        return (
          <div className="text-center w-56 font-bold mb-6" key={date.getTime()}>
            {date.getDate()} {arrayMonths[date.getMonth()].substring(0, 3)}.
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
              setOpenRightPanel={props.setOpenRightPanel}
              setDetailsRightPanel={props.setDetailsRightPanel}
              setContentRightPanel={props.setContentRightPanel}
            />
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={1}
              setOpenRightPanel={props.setOpenRightPanel}
              setContentRightPanel={props.setContentRightPanel}
              setDetailsRightPanel={props.setDetailsRightPanel}
            />
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={2}
              setContentRightPanel={props.setContentRightPanel}
              setOpenRightPanel={props.setOpenRightPanel}
              setDetailsRightPanel={props.setDetailsRightPanel}
            />
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={3}
              setOpenRightPanel={props.setOpenRightPanel}
              setContentRightPanel={props.setContentRightPanel}
              setDetailsRightPanel={props.setDetailsRightPanel}
            />
            <SingleSquare
              index={index}
              coursesList={coursesList}
              displayedDates={displayedDates}
              hour={hour}
              indexSquare={4}
              setOpenRightPanel={props.setOpenRightPanel}
              setContentRightPanel={props.setContentRightPanel}
              setDetailsRightPanel={props.setDetailsRightPanel}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Calendar;
