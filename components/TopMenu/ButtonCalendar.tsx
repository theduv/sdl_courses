interface ButtonCalendarProps {
  text: string;
  onClick: () => void;
}

const ButtonCalendar = (props: ButtonCalendarProps) => {
  return (
    <button
      onClick={props.onClick}
      className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md font-bold"
    >
      {props.text}
    </button>
  );
};

export default ButtonCalendar;
