import { GetCourseAtTime } from "@/functions/getCourseAtTime";
import Course from "@/interfaces/course.interface";
import { Props } from "next/script";

interface SingleSquareProps {
  index: number;
  coursesList: Array<Course>;
  displayedDates: Array<Date>;
  hour: string;
}

const SingleSquare = (props: SingleSquareProps) => {
  const coursesAtTime = GetCourseAtTime(
    props.coursesList,
    props.displayedDates[1],
    props.hour
  );

  return (
    <div
      className={
        "h-16 border border-b border-t-0 border-l-0 p-1 text-gray-500 flex items-center justify-center space-x-1 " +
        (props.index === 10 ? "border-b-0 " : " ")
      }
    >
      {coursesAtTime.map((course: Course) => (
        <div
          style={{
            backgroundColor: course.color,
            color: course.textColor ?? "#000000",
          }}
          title={course.title}
          className="text-center cursor-pointer h-full w-0 rounded-md flex-1 items-center justify-center flex"
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
