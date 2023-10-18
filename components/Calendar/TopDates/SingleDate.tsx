import { smallDateFormatWidth } from "@/functions/const";
import { arrayDays, arrayMonths } from "@/functions/datesLib";
import { useConfigStore } from "@/store/store";

interface SingleDateProps {
  date: Date;
  index: number;
}

const SingleDate = (props: SingleDateProps) => {
  const configStore = useConfigStore((state: any) => ({ ...state }));

  return (
    <div
      className="text-center truncate max-[900px]:w-full text-gray-200 w-52 font-bold mb-6 bg-gray-800 p-2 rounded-md text-white border border-gray-600 "
      key={props.date.getTime()}
    >
      <p>
        {configStore.windowWidth >= smallDateFormatWidth &&
          `${arrayDays[props.index]} `}
        {props.date.getDate()}
        {configStore.windowWidth < smallDateFormatWidth
          ? `/${props.date.getMonth() + 1}`
          : ` ${arrayMonths[props.date.getMonth()].substring(0, 3)}.`}
      </p>
    </div>
  );
};

export default SingleDate;
