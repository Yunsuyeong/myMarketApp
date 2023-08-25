import Button from "@/components/button";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import Textarea from "@/components/textarea";
import { Answer, Post, User } from "@prisma/client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { useRouter } from "next/router";
import useMutation from "@/utils/client/useMutation";
import { useEffect } from "react";
import { cls } from "@/utils/client/utils";

interface IQuestionForm {
  answer?: string;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    interestings: number;
  };
  answers: AnswerWithUser[];
}

interface AnswerWithUser extends Answer {
  user: User;
}

interface IPostDetailResponse {
  ok: boolean;
  post: PostWithUser;
  isInterested: boolean;
}

interface IMutationResult {
  ok: boolean;
  Answer: Answer;
}

export const formatDate = (date: any) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const CommunityDetail: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<IPostDetailResponse>(
    router.query.id ? `/api/community/${router.query.id}` : null
  );
  const created = new Date(data?.post?.createdAt!);
  const date = formatDate(created);
  const createdTime = `${date} ${created.getHours()}:${created.getMinutes()}`;
  const [interest] = useMutation(`/api/community/${router.query.id}/interest`);
  const onInterestClick = () => {
    if (!data) {
      return;
    }
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            interestings: data.isInterested
              ? data?.post?._count?.interestings - 1
              : data?.post?._count?.interestings + 1,
          },
        },
        isInterested: !data?.isInterested,
      },
      false
    );
    interest({});
  };
  const { register, handleSubmit, reset } = useForm<IQuestionForm>();
  const [answer, { loading, data: answerData }] = useMutation<IMutationResult>(
    `/api/community/${router.query.id}/answer`
  );
  const onValid = (form: IQuestionForm) => {
    if (loading) {
      true;
    }
    answer(form);
  };
  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);
  return (
    <Layout canBack>
      <PageTitle title="Community Detail" />
      <div>
        <span className="inline-flex items-center px-3 py-2 my-2 ml-3 rounded-full text-xs font-medium bg-white text-black">
          Question
        </span>
        <div className="flex items-center space-x-2 px-3 py-2 border-b">
          <div className="w-16 h-16 rounded-full bg-white" />
          <div>
            <p className="text-sm font-medium">{data?.post?.user?.name}</p>
            <p className="text-xs font-medium">View Profile &rarr;</p>
          </div>
        </div>
        <div>
          <div className="px-3 mt-2">
            <span className="text-blue-500 font-medium">Q. </span>
            {data?.post?.question}
          </div>
          <div className="w-full flex space-x-2 py-3 border-t border-b-[2px] mt-2">
            <button
              onClick={onInterestClick}
              className={cls(
                "flex space-x-2 items-center text-sm",
                data?.isInterested ? "text-blue-500" : ""
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
              <span>Quest {data?.post?._count?.interestings}</span>
            </button>
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
              <span>Answer {data?.post?._count?.answers}</span>
            </span>
            <span>{createdTime}</span>
          </div>
        </div>
        <div className="px-3 my-3 space-y-4">
          {data?.post?.answers?.map((answer) => (
            <div key={answer?.id} className="flex items-start space-x-2">
              <div className="w-10 h-10 bg-white rounded-full" />
              <div>
                <span className="text-sm block font-medium">
                  {answer?.user?.name}
                </span>
                <span className="text-xs block">
                  {formatDate(new Date(answer?.createdAt!))}
                </span>
                <p className="mt-2">{answer?.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit(onValid)} className="px-3">
          <Textarea
            register={register("answer", { required: true })}
            name="answer"
            placeholder="Answer Question"
            required
          />
          <Button large text={loading ? "Loading..." : "Reply"} />
        </form>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
