import Chat from "@/components/chat";
import ChatInput from "@/components/chatInput";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout canBack>
      <PageTitle title="Chat Detail" />
      <div className="px-3 py-4 pb-6 space-y-4">
        <Chat chat="Hi" />
        <Chat reversed chat="Nice to meet you" />
        <Chat chat="Good" />
        <Chat chat="Hi" />
        <Chat reversed chat="Nice to meet you" />
        <Chat chat="Good" />
        <form className="fixed bottom-0 inset-x-0 py-2 bg-white">
          <div className="relative w-full max-w-md flex items-center mx-auto">
            <ChatInput placeholder="Send a Chat" />
            <div className="absolute right-0 inset-y-0 flex py-2 pr-2">
              <button className="flex items-center px-2 rounded-full text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-300 hover:bg-blue-500">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
