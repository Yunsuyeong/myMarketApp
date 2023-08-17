import CircleBtn from "@/components/circleBtn";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import Link from "next/link";

const LiveHome: NextPage = () => {
  return (
    <Layout isSidebar title="Live">
      <PageTitle title="Live" />
      <div className="pb-4 space-y-4 divide-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <Link href={`/live/${i}`}>
              <div className="pt-2 px-3">
                <div className="w-full aspect-video bg-white rounded-sm shadow-sm" />
                <h1 className="text-2xl font-bold mt-2">iPad Pro 10.1</h1>
              </div>
            </Link>
          </div>
        ))}
        <CircleBtn href="/live/create">
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
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </CircleBtn>
      </div>
    </Layout>
  );
};

export default LiveHome;
