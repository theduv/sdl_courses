import CustomDate from "./customDate.interface";

interface Course {
  title: string;
  notes?: string;
  id: string;
  timeFrom: CustomDate;
  timeTo: CustomDate;
  backgroundColor?: string;
  textColor?: string;
}

export default Course;