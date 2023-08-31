import Chat from "@/components/chat";
import ChatInput from "@/components/chatInput";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Live } from "@prisma/client";
import useMutation from "@/utils/client/useMutation";
import useUser from "@/utils/client/useUser";
import { useEffect, useRef } from "react";

interface ILiveMessage {
  message: string;
  id: number;
  user: {
    name: string;
    avatar?: string;
    id: number;
  };
}

interface LiveWithMessage extends Live {
  messages: ILiveMessage[];
}

interface ILiveDetailResponse {
  ok: boolean;
  live: LiveWithMessage;
}

interface IChatForm {
  message: string;
}

const LiveDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { data, mutate } = useSWR<ILiveDetailResponse>(
    router.query.id ? `/api/live/${router.query.id}` : null,
    {
      refreshInterval: 1000,
    }
  );
  const [sendMessage, { data: sendMessageData, loading }] = useMutation(
    `/api/live/${router.query.id}/message`
  );
  const { register, handleSubmit, reset } = useForm<IChatForm>();
  const onValid = (form: IChatForm) => {
    reset();
    mutate(
      (prev: any) =>
        prev &&
        ({
          ...prev,
          live: {
            ...prev.live,
            messages: [
              ...prev.live.messages,
              {
                id: Date.now(),
                message: form.message,
                user: {
                  ...user,
                },
              },
            ],
          },
        } as any),
      false
    );
    sendMessage(form);
  };
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef?.current?.scrollIntoView();
  }, []);
  return (
    <Layout canBack>
      <PageTitle title="Live Detail" />
      <div className="px-3 py-4 space-y-4">
        <div className="w-full aspect-video bg-white ronded-sm shadow-sm" />
        <div className="mt-2">
          <h1 className="text-2xl font-bold">{data?.live.id}</h1>
          <span className="text-2xl font-medium block mt-1 text-gray-300">
            ${data?.live.price}
          </span>
          <p className="text-xl my-4">{data?.live.description}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Live Chatting</h3>
          <div className="py-4 px-3 pb-8 space-y-4 h-[50vh] overflow-y-scroll">
            {data?.live?.messages?.map((message) => (
              <Chat
                key={message.id}
                chat={message.message}
                reversed={message.user.id === user?.id}
              />
            ))}
            <div ref={scrollRef} />
          </div>
          <form
            onSubmit={handleSubmit(onValid)}
            className="fixed bottom-0 inset-x-0 py-2 bg-white"
          >
            <div className="relative w-full max-w-md flex items-center mx-auto">
              <ChatInput
                register={register("message", { required: true })}
                required
                placeholder="Leave a Message"
              />
              <div className="absolute right-0 inset-y-0 flex py-2 pr-2">
                <button className="flex items-center px-2 rounded-full text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-300 hover:bg-blue-500">
                  {loading ? "!!" : ">"}
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
