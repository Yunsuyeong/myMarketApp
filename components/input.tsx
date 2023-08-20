import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
  placeholder?: string;
}

const Input = ({
  label,
  name,
  kind = "text",
  type,
  register,
  required,
  placeholder,
}: IInput) => {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      {kind === "text" ? (
        <div className="relative flex items-center rounded-sm shadow-sm">
          <input
            id={name}
            required={required}
            type={type}
            {...register}
            placeholder={placeholder}
            className="w-full px-3 pl-6 py-2 border text-black border-white rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="relative flex items-center rounded-sm shadow-sm">
          <div className="absolute left-0 flex justify-center items-center pl-2 pointer-events-none">
            <span className="text-sm text-black">$</span>
          </div>
          <input
            id={name}
            required={required}
            type={type}
            {...register}
            placeholder={placeholder}
            className="appearance-none w-full text-md text-black font-medium px-3 py-2 pl-6 border border-white rounded-sm shadow-sm placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute right-0 flex items-center pr-2 pointer-events-none">
            <span>USD</span>
          </div>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="relative flex items-center rounded-sm shadow-sm">
          <span className="flex justify-center items-center rounded-l-md px-2 border-r-0 border border-white bg-white text-black select-none">
            +82
          </span>
          <input
            id={name}
            required={required}
            type={type}
            {...register}
            placeholder={placeholder}
            className="appearance-none w-full text-md text-black font-medium px-2 py-2 border border-white rounded-sm shadow-sm placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Input;
