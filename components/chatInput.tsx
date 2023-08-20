import { UseFormRegisterReturn } from "react-hook-form";

interface IChatInput {
  placeholder: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

const ChatInput = ({ placeholder, register, required }: IChatInput) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      required={required}
      {...register}
      className="w-full shadow-sm rounded-full focus:ring-blue-500 focus:outline-none focus:border-blue-500 pr-8 text-black placeholder-black"
    />
  );
};

export default ChatInput;
