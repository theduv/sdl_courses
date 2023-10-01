import CustomDate from "./customDate.interface";

interface Course {
  title: string;
  notes?: string;
  timeFrom: CustomDate;
  timeTo: CustomDate;
  color?: string;
  textColor?: string;
}

export default Course;
