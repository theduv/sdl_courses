import Course from "@/interfaces/course.interface";

interface SingleCourseDetailsProps {
  course: Course | null;
}

const SingleCourseDetails = (props: SingleCourseDetailsProps) => {
  if (props.course === null) {
    return <div></div>;
  }
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl">{props.course.title}</h2>
      <div>
        <h3>Notes</h3>
        <textarea
          value={props.course.notes}
          className="rounded-lg bg-gray-600 p-4 w-full h-32"
        />
      </div>
    </div>
  );
};

export default SingleCourseDetails;
