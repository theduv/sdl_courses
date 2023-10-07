import EnumButtonType from "@/enums/enumButtonType";
import clsx from "clsx";
import { useState } from "react";

interface ButtonProps {
  type: EnumButtonType;
  content: string;
  onClick: (e?: any) => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      type="button"
      onClick={props.onClick}
      className={clsx("px-4 py-2 rounded-lg font-bold", {
        "bg-gray-400": props.disabled,
        "bg-red-600": props.type === EnumButtonType.delete && !hovered,
        "bg-red-700": props.type === EnumButtonType.delete && hovered,
        "bg-blue-600": props.type === EnumButtonType.default && !hovered,
        "bg-blue-700": props.type === EnumButtonType.default && hovered,
        "bg-gray-600": props.type === EnumButtonType.cancel && !hovered,
        "bg-gray-700": props.type === EnumButtonType.cancel && hovered,
      })}
    >
      {props.content}
    </button>
  );
};

export default Button;
