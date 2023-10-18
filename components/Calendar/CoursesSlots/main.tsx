import { Fragment } from "react";
import SingleSquare from "./SingleSquare/main";
import Course from "@/interfaces/course.interface";
import { arrayHours } from "@/functions/datesLib";
import clsx from "clsx";
import { useConfigStore } from "@/store/store";
import { smallScreenWidth } from "@/functions/const";

interface CoursesSlotProps {
  coursesList: Array<Course>;
  displayedDates: Array<Date>;
}

const CoursesSlots = (props: CoursesSlotProps) => {
  const configStore = useConfigStore((state: any) => ({ ...state }));

  return arrayHours.map((hour: string, index: number) => {
    // each hour = the hour itself + the 5 empty squares for the 5 days
    return (
      <Fragment key={hour}>
        <div
          className={clsx(
            "items-center flex justify-between px-4 rounded-lg p-2",
            {
              hidden: configStore.windowWidth < smallScreenWidth,
            }
          )}
        >
          <div />
          <h1 className="italic">{hour}</h1>
        </div>
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

export default CoursesSlots;
