import EnumPagesPanel from "@/enums/enumPagesPanel";
import { GetCourseAtTime } from "@/functions/getCourseAtTime";
import Course from "@/interfaces/course.interface";
import { Props } from "next/script";
import { Dispatch, SetStateAction } from "react";

interface SingleSquareProps {
  index: number;
  indexSquare: number;
  coursesList: Array<Course>;
  displayedDates: Array<Date>;
  hour: string;
  setDetailsRightPanel: Dispatch<SetStateAction<Course | null>>;
  setOpenRightPanel: Dispatch<SetStateAction<boolean>>;
  setContentRightPanel: Dispatch<SetStateAction<EnumPagesPanel | null>>;
}

const SingleSquare = (props: SingleSquareProps) => {
  const coursesAtTime = GetCourseAtTime(
    props.coursesList,
    props.displayedDates[props.indexSquare],
    props.hour
  );

  if (coursesAtTime.length !== 0) console.log(coursesAtTime);
  return (
    <div
      className={
        "h-16 border border-b border-t-0 border-l-0 p-1 text-gray-500 flex items-center justify-center space-x-1 " +
        (props.index === 10 ? "border-b-0 " : " ") +
        (props.indexSquare === 4 ? "border-r-0 " : " ")
      }
    >
      {coursesAtTime.map((course: Course) => (
        <div
          style={{
            backgroundColor: course.backgroundColor ?? "#FFFFFF",
            color: course.textColor ?? "#000000",
          }}
          title={course.title}
          onClick={() => {
            props.setOpenRightPanel(true);
            props.setDetailsRightPanel(course);
            props.setContentRightPanel(EnumPagesPanel.singleCourseDetails);
          }}
          className="cursor-pointer h-full w-0 rounded-md flex-1 items-center justify-center flex"
        >
          <p className="text-ellipsis overflow-hidden whitespace-nowrap p-1">
            {course.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SingleSquare;
