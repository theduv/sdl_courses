import Course from "@/interfaces/course.interface";

const GetCourseAtTime = (
  coursesList: Array<Course>,
  date: Date,
  timerange: string
) => {
  const hours = timerange.split("-");
  const timeFrom = date.getDate() + parseInt(hours[0]) * 3600000;
  const timeTo = date.getDate() + parseInt(hours[1]) * 3600000;

  const targetCourses = coursesList.filter((course: Course) => {
    if (course.timeFrom <= timeFrom && course.timeTo >= timeTo) return true;
  });
  return targetCourses;
};

export { GetCourseAtTime };
