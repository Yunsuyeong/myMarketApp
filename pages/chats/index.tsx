import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import Link from "next/link";

const ChatsHome: NextPage = () => {
  return (
    <Layout isSidebar title="Chats">
      <PageTitle title="Chats" />
      <div className="py-8 divide-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <Link href={`/chats/${i}`}>
              <div className="flex items-center px-2 py-3 space-x-2 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white" />
                <div>
                  <p className="text-sm font-medium">Steve Jobs</p>
                  <p className="text-sm">See you tomorrow.</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ChatsHome;
