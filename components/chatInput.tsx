interface IChatInput {
  placeholder: string;
}

const ChatInput = ({ placeholder }: IChatInput) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full shadow-sm rounded-full focus:ring-blue-500 focus:outline-none focus:border-blue-500 pr-8 text-black placeholder-black"
    />
  );
};

export default ChatInput;
