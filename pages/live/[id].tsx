import Chat from "@/components/chat";
import ChatInput from "@/components/chatInput";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";

const LiveDetail: NextPage = () => {
  return (
    <Layout canBack>
      <PageTitle title="Live Detail" />
      <div className="px-3 py-4 space-y-4">
        <div className="w-full aspect-video bg-white ronded-sm shadow-sm" />
        <div className="mt-2">
          <h1 className="text-2xl font-bold">Iphone 15</h1>
          <span className="text-2xl font-medium block mt-1 text-gray-300">
            $120
          </span>
          <p className="text-xl my-4">abcdefghijklmnopqrstuvwxyz</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Live Chatting</h3>
          <div className="py-4 px-3 pb-8 space-y-4 h-[50vh] overflow-y-scroll">
            <Chat chat="Hi" />
            <Chat reversed chat="Nice to meet you" />
            <Chat chat="Good" />
            <Chat chat="Hi" />
            <Chat reversed chat="Nice to meet you" />
            <Chat chat="Good" />
          </div>
          <form className="fixed bottom-0 inset-x-0 py-2 bg-white">
            <div className="relative w-full max-w-md flex items-center mx-auto">
              <ChatInput placeholder="Leave a Message" />
              <div className="absolute right-0 inset-y-0 flex py-2 pr-2">
                <button className="flex items-center px-2 rounded-full text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-300 hover:bg-blue-500">
                  &rarr;
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
