import CustomDate from "./customDate.interface";

interface Course {
  title: string;
  notes?: string;
  timeFrom: CustomDate;
  timeTo: CustomDate;
  backgroundColor?: string;
  textColor?: string;
}

export default Course;
