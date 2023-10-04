import { arrayDays, arrayMonths } from "@/functions/datesLib";

interface SingleDateProps {
  date: Date;
  index: number;
}

const SingleDate = (props: SingleDateProps) => {
  return (
    <div
      className="text-center w-52 font-bold mb-6 bg-amber-700 p-2 rounded-md text-white border border-gray-800 "
      key={props.date.getTime()}
    >
      {arrayDays[props.index]} {props.date.getDate()}{" "}
      {arrayMonths[props.date.getMonth()].substring(0, 3)}.
    </div>
  );
};

export default SingleDate;
