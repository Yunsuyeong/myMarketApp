import { cls } from "@/utils/client/utils";

interface IButton {
  large?: boolean;
  text: string;
  [key: string]: any;
}

const Button = ({ large = false, onClick, text, ...rest }: IButton) => {
  return (
    <button
      {...rest}
      className={cls(
        "w-full py-2 px-2 mt-2 bg-blue-300 hover:bg-blue-500 rounded-sm shadow-sm border border-transparent text-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none",
        large ? "py-3" : "py-2 text-sm"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
