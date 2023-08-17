interface ITextarea {
  label?: string;
  name?: string;
  [key: string]: any;
}

const Textarea = ({ label, name, ...rest }: ITextarea) => {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className="w-full mt-1 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
        rows={6}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
