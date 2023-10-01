interface CustomInputProps {
  type: string;
  placeholder: string;
  value: string;
  step?: string;
  onChange: (e: any) => void;
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <label className="flex space-x-4 items-center w-full justify-between">
      <h3>{props.placeholder}</h3>
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type}
        className="rounded-lg py-2 px-4 bg-gray-600 text-gray-200"
        step={props.step}
      ></input>
    </label>
  );
};
export default CustomInput;
