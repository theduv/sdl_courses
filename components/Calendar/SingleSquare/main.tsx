import EnumPagesPanel from "@/enums/enumPagesPanel";
import { getCustomDateFromDate } from "@/functions/datesLib";
import { GetCoursesAtTime } from "@/functions/getCoursesAtTime";
import Course from "@/interfaces/course.interface";
import useRightPanelStore from "@/store/store";
import clsx from "clsx";
import { useState } from "react";
import ButtonCourse from "./ButtonCourse";

interface SingleSquareProps {
  index: number;
  indexSquare: number;
  coursesList: Array<Course>;
  displayedDates: Array<Date>;
  hour: string;
}

const SingleSquare = (props: SingleSquareProps) => {
  const targetDate = props.displayedDates[props.indexSquare];
  const formattedDate = targetDate
    ? getCustomDateFromDate(targetDate)
    : getCustomDateFromDate(new Date());
  const panelStore = useRightPanelStore((state: any) => ({
    setOpen: state.setOpen,
    setType: state.setType,
    setAddCourseDefault: state.setAddCourseDefault,
  }));
  const [hovered, setHovered] = useState(false);
  const coursesAtTime = GetCoursesAtTime(
    props.coursesList,
    props.displayedDates[props.indexSquare],
    props.hour
  );

  const onClickAddCourse = () => {
    console.log(
      `${formattedDate.date}-${formattedDate.month + 1}-${formattedDate.year}`
    );
    panelStore.setType(EnumPagesPanel.addCourse);
    panelStore.setAddCourseDefault({
      date: `${formattedDate.year}-${(formattedDate.month + 1)
        .toString()
        .padStart(2, "0")}-${formattedDate.date.toString().padStart(2, "0")}`,
      timeFrom: `${props.hour.split("-")[0]}:00`,
      timeTo: `${props.hour.split("-")[1]}:00`,
    });
    panelStore.setOpen(true);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        "h-14 border border-b border-t-0 border-l-0 p-1 text-gray-500 flex items-center justify-center space-x-1 border-opacity-20 border-gray-200 " +
        (props.index === 10 ? "border-b-0 " : " ") +
        (props.indexSquare === 4 ? "border-r-0 " : " ") +
        (props.index === 4 ? "bg-gray-900 bg-opacity-50 " : " ")
      }
    >
      {coursesAtTime.map((course: Course) => (
        <ButtonCourse key={`${course.id} course Link`} course={course} />
      ))}
      <button
        onClick={onClickAddCourse}
        className={clsx(
          "h-full w-0 text-3xl text-gray-200 rounded-md flex-1 items-center justify-center flex border border-dashed",
          { hidden: !hovered }
        )}
      >
        +
      </button>
    </div>
  );
};

export default SingleSquare;
