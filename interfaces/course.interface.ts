import CustomDate from "./customDate.interface";

interface Course {
  title: string;
  teacher?: string;
  room?: string;
  notes: string;
  id: string;
  timeFrom: CustomDate;
  timeTo: CustomDate;
  links?: string;
  backgroundColor?: string;
  textColor?: string;
  color?: string;
}

export default Course;
