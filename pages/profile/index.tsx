import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import useUser from "@/utils/client/useUser";
import { cls } from "@/utils/client/utils";
import { Review, User } from "@prisma/client";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { formatDate } from "../community/[id]";

interface ReviewWithUser extends Review {
  createdBy: User;
}

interface IReviewResponse {
  ok: boolean;
  reviews: ReviewWithUser[];
}

const ProfileHome: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const { data } = useSWR<IReviewResponse>("/api/reviews");
  return (
    <Layout isSidebar title="My Profile">
      <PageTitle title="Profile" />
      <div className="px-3 py-4">
        <div className="flex items-center space-x-2">
          <div className="h-16 w-16 rounded-full bg-white" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user?.name}</span>
            <Link href="/profile/edit" className="cursor-pointer">
              <span className="text-xs ">Edit Profile &rarr;</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-around mt-5">
          <div
            onClick={() => router.push("/profile/sold")}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-12 h-12 flex justify-center items-center bg-blue-300 rounded-full">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <span className="text-sm font-medium mt-2">Sold</span>
          </div>
          <div
            onClick={() => router.push("/profile/bought")}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-12 h-12 flex justify-center items-center bg-blue-300 rounded-full">
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </div>
            <span className="text-sm font-medium mt-2">Bought</span>
          </div>
          <div
            onClick={() => router.push("/profile/liked")}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-12 h-12 flex justify-center items-center bg-blue-300 rounded-full">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <span className="text-sm font-medium mt-2">Liked</span>
          </div>
        </div>
        <div className="mt-5">
          {data?.reviews?.map((review) => (
            <div key={review.id}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white" />
                <div>
                  <h3 className="text-sm font-bold">{review.createdBy.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, star) => (
                      <svg
                        key={star}
                        className={cls(
                          "h-5 w-5",
                          review.score > star ? "text-yellow-500" : "text-white"
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm">
                    {formatDate(new Date(review.createdAt!))}{" "}
                    {new Date(review.createdAt!).getHours()}:
                    {new Date(review.createdAt!).getMinutes()}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-sm">
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileHome;
