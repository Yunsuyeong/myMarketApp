import { NextPage } from "next";

const CommunityAsk: NextPage = () => {
  return (
    <form className="px-2 py-3">
      <textarea
        className="w-full mt-1 shadow-sm rounded-sm text-black focus:ring-blue-500 focus:border-blue-500"
        rows={6}
        placeholder="Ask a question"
      />
      <button className="w-full py-2 px-2 mt-2 bg-blue-300 hover:bg-blue-500 rounded-sm shadow-sm border border-transparent text-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
        Ask
      </button>
    </form>
  );
};

export default CommunityAsk;
