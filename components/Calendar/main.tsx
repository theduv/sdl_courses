"use client";
import { arrayHours, arrayMonths, getWeekAtDate } from "@/functions/datesLib";
import { GetCourseAtTime } from "@/functions/getCourseAtTime";
import Course from "@/interfaces/course.interface";
import { Fragment, useEffect, useState } from "react";
import coursesSamples from "../../coursesSample.json";
import SingleSquare from "./SingleSquare";

interface CalendarProps {
  currentDate: Date;
}

const Calendar = (props: CalendarProps) => {
  const [displayedDates, setDisplayedDates] = useState<Array<Date>>([]);
  const [coursesList, setCoursesList] = useState<Array<Course>>(coursesSamples);

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
          <Fragment>
            <div className="items-center flex justify-center">{hour}</div>
            <div
              className={
                "h-16 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesList, displayedDates[0], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <SingleSquare
              index={index}
              coursesList={coursesSamples}
              displayedDates={displayedDates}
              hour={hour}
            />
            <div
              className={
                "h-16 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[2], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <div
              className={
                "h-16 border border-b border-t-0 border-l-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[3], hour)
                  .length !== 0
                  ? "bg-gray-200 "
                  : " ")
              }
            ></div>
            <div
              className={
                "border h-16 border-b border-t-0 border-l-0 border-r-0 " +
                (index === 10 ? "border-b-0 " : " ") +
                (GetCourseAtTime(coursesSamples, displayedDates[4], hour)
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
