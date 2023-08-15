import { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="px-3 py-4 pb-6 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Hi</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Nice to meet you</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Good</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Hi</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Nice to meet you</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Good</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Hi</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Nice to meet you</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-1/2 p-2 border border-white rounded-sm text-sm">
          <p>Good</p>
        </div>
      </div>
      <div className="fixed bottom-0 inset-x-0 py-2 bg-white">
        <div className="relative w-full max-w-md flex items-center mx-auto">
          <input
            type="text"
            placeholder="Leave a message"
            className="w-full shadow-sm rounded-full focus:ring-blue-500 focus:outline-none focus:border-blue-500 pr-8 text-black placeholder-black"
          />
          <div className="absolute right-0 inset-y-0 flex py-2 pr-2">
            <button className="flex items-center px-2 rounded-full text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-300 hover:bg-blue-500">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
