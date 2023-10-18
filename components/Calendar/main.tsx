"use client";
import { getWeekAtDate } from "@/functions/datesLib";
import Course from "@/interfaces/course.interface";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from "@/firebase/firebaseInit";
import TopDates from "./TopDates/main";
import CoursesSlots from "./CoursesSlots/main";
import clsx from "clsx";
import { useConfigStore } from "@/store/store";
import { smallScreenWidth } from "@/functions/const";

interface CalendarProps {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

const Calendar = (props: CalendarProps) => {
  const [displayedDates, setDisplayedDates] = useState<Array<Date>>([]);
  const [coursesList, setCoursesList] = useState<Array<Course>>([]);
  const [touchStart, setTouchStart] = useState<null | number>(null);
  const [touchEnd, setTouchEnd] = useState<null | number>(null);
  const configStore = useConfigStore((state: any) => ({ ...state }));

  const minSwipeDistance = 50;

  const onSwipeLeft = () => {
    props.setCurrentDate((oldDate) => {
      const oneMoreWeek = new Date(oldDate);
      oneMoreWeek.setDate(oldDate.getDate() + 7);
      return oneMoreWeek;
    });
  };

  const onSwipeRight = () => {
    props.setCurrentDate((oldDate) => {
      const oneLessWeek = new Date(oldDate);
      oneLessWeek.setDate(oldDate.getDate() - 7);
      return oneLessWeek;
    });
  };

  useEffect(() => {
    configStore.setWindowWidth(window.innerWidth);
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

  const touchStartHandler = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const touchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    }
  };

  const touchMoveHandler = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  useEffect(() => {
    setDisplayedDates(getWeekAtDate(props.currentDate));
  }, [props.currentDate]);

  return (
    <div
      className={clsx("grid", {
        "grid-cols-6": configStore.windowWidth >= smallScreenWidth,
        "grid-cols-5": configStore.windowWidth < smallScreenWidth,
      })}
      // onTouchStart={touchStartHandler}
      // onTouchEnd={touchEndHandler}
      // onTouchMove={touchMoveHandler}
    >
      <div
        className={clsx({ hidden: configStore.windowWidth < smallScreenWidth })}
      />
      <TopDates displayedDates={displayedDates} />
      <CoursesSlots displayedDates={displayedDates} coursesList={coursesList} />
    </div>
  );
};

export default Calendar;
