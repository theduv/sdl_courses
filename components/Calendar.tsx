"use client";
import { arrayHours, arrayMonths, getWeekAtDate } from "@/functions/datesLib";
import { GetCourseAtTime } from "@/functions/getCourseAtTime";
import Course from "@/interfaces/course.interface";
import { Fragment, useEffect, useState } from "react";
import coursesSamples from "../coursesSample.json";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [displayedDates, setDisplayedDates] = useState<Array<Date>>([]);
  const [coursesList, setCoursesList] = useState<Array<Course>>(coursesSamples);

  useEffect(() => {
    console.log(coursesSamples);
    setDisplayedDates(getWeekAtDate(currentDate));
  }, []);

  return (
    <div className="grid grid-cols-8">
      <div />
      {displayedDates.map((date: Date) => {
        return (
          <div className="text-center w-24 font-bold mb-6" key={date.getTime()}>
            {date.getDate()} {arrayMonths[date.getMonth()].substring(0, 3)}.
          </div>
        );
      })}
      {arrayHours.map((hour: string, index: number) => {
        return (
          <Fragment>
            <div className="items-center flex justify-center">{hour}</div>
            <div
              className={
                "h-14 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[0], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <div
              className={
                "h-14 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[0], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <div
              className={
                "h-14 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[0], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <div
              className={
                "h-14 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[0], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <div
              className={
                "h-14 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[0], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <div
              className={
                "h-14 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[0], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <div
              className={
                "border border-b border-t-0 border-l-0 border-r-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[0], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Calendar;
