import CircleBtn from "@/components/circleBtn";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";

const CommunityHome: NextPage = () => {
  return (
    <Layout isSidebar title="Question">
      <PageTitle title="Question" />
      <div className="py-4 px-3 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col items-center cursor-pointer">
            <span className="flex items-center ml-2 px-3 py-2 rounded-full text-sm font-medium text-black bg-white">
              Question
            </span>
            <div className="px-2 mt-3">
              <span className="text-sm text-blue-500 font-medium">Q.</span>
              What's best Restaurant?
            </div>
            <div className="px-2 mt-6 w-full flex justify-between items-center text-xs font-medium">
              <span>Me</span>
              <span>9 Hours</span>
            </div>
            <div className="w-full flex px-3 mt-3 space-x-4 border-t border-b-[2px]">
              <span className="flex items-center space-x-2 text-sm">
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
        ))}
        <CircleBtn href="/community/ask">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </CircleBtn>
      </div>
    </Layout>
  );
};

export default CommunityHome;
