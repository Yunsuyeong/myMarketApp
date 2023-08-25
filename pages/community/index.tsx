import CircleBtn from "@/components/circleBtn";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import { cls } from "@/utils/client/utils";
import { Post, User } from "@prisma/client";
import { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import { formatDate } from "./[id]";
import useCoords from "@/utils/client/useCoords";

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    interestings: number;
  };
}

interface IPostResponse {
  ok: boolean;
  posts: PostWithUser[];
}

const CommunityHome: NextPage = () => {
  const { latitude, longitude } = useCoords();
  const { data } = useSWR<IPostResponse>("/api/community");
  return (
    <Layout isSidebar title="Question">
      <PageTitle title="Question" />
      <div className="py-4 px-3 space-y-4">
        {data?.posts.map((post) => (
          <Link key={post.id} href={`community/${post.id}`}>
            <div className="flex flex-col items-center cursor-pointer">
              <span className="flex items-center ml-2 px-3 py-2 rounded-full text-sm font-medium text-black bg-white">
                Question
              </span>
              <div className="px-2 mt-3">
                <span className="text-sm text-blue-500 font-medium">Q.</span>
                {post.question}
              </div>
              <div className="px-2 mt-6 w-full flex justify-between items-center text-xs font-medium">
                <span>{post.user.name}</span>
                <span>{formatDate(new Date(post?.createdAt!))}</span>
              </div>
              <div className="w-full flex px-3 mt-3 space-x-4 border-t border-b-[2px]">
                <span
                  className={cls(
                    "flex items-center space-x-2 text-sm",
                    post?._count?.interestings > 0 ? "text-blue-500" : ""
                  )}
                >
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
                  <span>Quest {post?._count?.interestings}</span>
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
                  <span>Answer {post?._count?.answers}</span>
                </span>
              </div>
            </div>
          </Link>
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
