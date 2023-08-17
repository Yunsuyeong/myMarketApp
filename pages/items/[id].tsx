import Button from "@/components/button";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import Link from "next/link";

const ItemDetail: NextPage = () => {
  return (
    <Layout canBack>
      <PageTitle title="Item Detail" />
      <div className="px-3 py-4">
        <div className="mb-8">
          <div className="h-96 bg-white" />
          <div className="flex items-center border-t border-b space-x-2 py-2">
            <div className="w-16 h-16 rounded-full bg-white" />
            <div>
              <p className="text-sm font-medium">Steve Jobs</p>
              <Link href={"/profile"}>
                <p className="text-xs font-medium cursor-pointer">
                  View Profile &rarr;
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-2xl font-bold">Iphone 15</h1>
            <span className="text-2xl font-medium block mt-1 text-gray-300">
              $120
            </span>
            <p className="text-xl my-4">abcdefghijklmnopqrstuvwxyz</p>
            <div className="flex justify-between items-center space-x-2">
              <Button large text="Talk to Seller" />
              <button className="flex justify-center items-center rounded-md hover:text-gray-500 text-gray-300">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Similar Items</h3>
          <div className="grid grid-cols-3 mt-6 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <div className="h-48 w-full bg-white mb-4" />
                <h3 className="-mb-1">iPad Mini 7</h3>
                <p className="text-sm text-gray-300">$49.9</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
