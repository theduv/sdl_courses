import { colorChoices } from "@/functions/const";
import clsx from "clsx";

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
          key={colorChoice + "_choice"}
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
