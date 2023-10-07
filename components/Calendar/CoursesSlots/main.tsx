import { Dispatch, Fragment, SetStateAction } from "react";
import SingleSquare from "../SingleSquare/main";
import Course from "@/interfaces/course.interface";
import { arrayHours } from "@/functions/datesLib";

interface CoursesSlotProps {
  coursesList: Array<Course>;
  displayedDates: Array<Date>;
}

const CoursesSlot = (props: CoursesSlotProps) => {
  return arrayHours.map((hour: string, index: number) => {
    return (
      <Fragment key={hour}>
        <div className="items-center flex justify-center">{hour}</div>
        <SingleSquare
          index={index}
          coursesList={props.coursesList}
          displayedDates={props.displayedDates}
          hour={hour}
          indexSquare={0}
        />
        <SingleSquare
          index={index}
          coursesList={props.coursesList}
          displayedDates={props.displayedDates}
          hour={hour}
          indexSquare={1}
        />
        <SingleSquare
          index={index}
          coursesList={props.coursesList}
          displayedDates={props.displayedDates}
          hour={hour}
          indexSquare={2}
        />
        <SingleSquare
          index={index}
          coursesList={props.coursesList}
          displayedDates={props.displayedDates}
          hour={hour}
          indexSquare={3}
        />
        <SingleSquare
          index={index}
          coursesList={props.coursesList}
          displayedDates={props.displayedDates}
          hour={hour}
          indexSquare={4}
        />
      </Fragment>
    );
  });
};

export default CoursesSlot;
