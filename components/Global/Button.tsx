import EnumButtonType from "@/enums/enumButtonType";
import clsx from "clsx";

interface ButtonProps {
  type: EnumButtonType;
  content: string;
  onClick: (e?: any) => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={clsx("px-4 py-2 rounded-lg font-bold", {
        "bg-gray-400": props.disabled,
        "bg-red-600": props.type === EnumButtonType.delete,
        "bg-blue-600": props.type === EnumButtonType.default,
      })}
    >
      {props.content}
    </button>
  );
};

export default Button;
