interface FormCourse {
  id?: string;
  title: string;
  teacher: string;
  room: string;
  date: string;
  notes: string;
  hourFrom: string;
  hourTo: string;
  links: Array<string>;
  link: string;
  color: string;
}

export default FormCourse;
