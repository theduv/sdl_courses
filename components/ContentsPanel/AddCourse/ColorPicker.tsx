import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

const colorChoices = [
  "bg-lime-700",
  "bg-green-700",
  "bg-blue-700",
  "bg-purple-700",
  "bg-pink-700",
  "bg-red-700",
  "bg-orange-700",
  "bg-yellow-700",
  "bg-gray-700",
];

interface ColorPickerProps {
  color: string;
  setColor: (newColor: string) => void;
}

const ColorPicker = (props: ColorPickerProps) => {
  const onClickColor = (pickedColor: string) => {
    props.setColor(pickedColor);
  };

  return (
    <div className="flex space-x-4">
      {colorChoices.map((colorChoice) => (
        <button
          onClick={() => onClickColor(colorChoice)}
          type="button"
          className={clsx(`rounded-full h-6 w-6 ${colorChoice}`, {
            "border-2 border-gray-200 border-opacity-0":
              props.color !== colorChoice,
            "border-2 border-gray-200": props.color === colorChoice,
          })}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
