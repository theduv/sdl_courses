import { GetCoursesAtTime } from "@/functions/getCoursesAtTime";
import Course from "@/interfaces/course.interface";
import clsx from "clsx";
import { useState } from "react";
import ButtonCourse from "./ButtonCourse";
import ButtonAddCourse from "./ButtonAddCourse";

interface SingleSquareProps {
  index: number;
  indexSquare: number;
  coursesList: Array<Course>;
  displayedDates: Array<Date>;
  hour: string;
}

const SingleSquare = (props: SingleSquareProps) => {
  const targetDate = props.displayedDates[props.indexSquare];

  const [hovered, setHovered] = useState(false);
  const coursesAtTime = GetCoursesAtTime(
    props.coursesList,
    props.displayedDates[props.indexSquare],
    props.hour
  );

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        "h-14 border border-b border-t-0 border-l-0 p-1 text-gray-500 flex items-center justify-center space-x-1 border-opacity-20 border-gray-200",
        {
          "border-b-0": props.index === 10,
          "border-r-0": props.indexSquare === 4,
          "bg-gray-900 bg-opacity-50": props.index === 4,
        }
      )}
    >
      {coursesAtTime.map((course: Course) => (
        <ButtonCourse key={`${course.id} course Link`} course={course} />
      ))}
      <ButtonAddCourse
        hour={props.hour.replaceAll("h", "").replaceAll(" ", "")} // turning "08h - 09h" to "08-09"
        hovered={hovered}
        targetDate={targetDate}
      />
    </div>
  );
};

export default SingleSquare;