import Course from "@/interfaces/course.interface";
import { getCustomDateFromDate } from "./datesLib";

const GetCourseAtTime = (
  coursesList: Array<Course>,
  date: Date | undefined,
  timerange: string
) => {
  if (!date) return [];
  const hours = timerange.split("-");
  const currentCustomDate = getCustomDateFromDate(date);

  const targetCourses = coursesList.filter((course: Course) => {
    if (
      course.timeFrom.date === currentCustomDate.date &&
      course.timeFrom.month === currentCustomDate.month &&
      course.timeFrom.year === currentCustomDate.year &&
      parseInt(hours[0]) >= course.timeFrom.hour &&
      parseInt(hours[1]) <= course.timeTo.hour
    )
      return true;
  });
  return targetCourses;
};

export { GetCourseAtTime };
