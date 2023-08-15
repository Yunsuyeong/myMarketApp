import { NextPage } from "next";

const CommunityDetail: NextPage = () => {
  return (
    <div>
      <span className="inline-flex items-center px-3 py-2 my-2 ml-3 rounded-full text-xs font-medium bg-white text-black">
        Question
      </span>
      <div className="flex items-center space-x-2 px-3 py-2 border-b">
        <div className="w-16 h-16 rounded-full bg-white" />
        <div>
          <p className="text-sm font-medium">Steve Jobs</p>
          <p className="text-xs font-medium">View Profile &rarr;</p>
        </div>
      </div>
      <div>
        <div className="px-3 mt-2">
          <span className="text-blue-500 font-medium">Q. </span>What's best
          Restaurant?
        </div>
        <div className="w-full flex space-x-2 py-3 border-t border-b-[2px] mt-2">
          <span className="flex space-x-2 items-center text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Quest 1</span>
          </span>
          <span className="flex items-center space-x-2 test-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>Answer 1</span>
          </span>
        </div>
      </div>
      <div className="px-3 my-3 space-y-4">
        <div className="flex items-start space-x-2">
          <div className="w-10 h-10 bg-white rounded-full" />
          <div>
            <span className="text-sm block font-medium">Steve Jobs</span>
            <span className="text-xs block">2 Hours</span>
            <p className="mt-2">Best Restaurant is behind of My house.</p>
          </div>
        </div>
      </div>
      <div className="px-3">
        <textarea
          placeholder="Answer Question"
          rows={6}
          className="w-full mt-1 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
        />
        <button className="w-full py-2 px-2 mt-2 bg-blue-300 hover:bg-blue-500 rounded-sm shadow-sm border border-transparent text-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityDetail;
