import { cls } from "@/utils/client/utils";

interface IChat {
  chat: string;
  reversed?: boolean;
  photoUrl?: string;
}

const Chat = ({ chat, reversed, photoUrl }: IChat) => {
  return (
    <div
      className={cls(
        "flex items-start",
        reversed ? "flex-row-reverse space-x-reverse" : "space-x-2"
      )}
    >
      <div className="w-10 h-10 rounded-full bg-white" />
      <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
        <p>{chat}</p>
      </div>
    </div>
  );
};

export default Chat;
