import Button from "@/components/button";
import PageTitle from "@/components/pageTitle";
import Textarea from "@/components/textarea";
import { Post } from "@prisma/client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useMutation from "@/utils/client/useMutation";
import { useEffect } from "react";
import useCoords from "@/utils/client/useCoords";

interface IAskForm {
  question?: string;
}

interface IMutationResult {
  ok: boolean;
  post: Post;
}

const CommunityAsk: NextPage = () => {
  const { latitude, longitude } = useCoords();
  const router = useRouter();
  const { register, handleSubmit } = useForm<IAskForm>();
  const [post, { loading, data }] =
    useMutation<IMutationResult>("/api/community");
  const onValid = (form: IAskForm) => {
    if (loading) {
      return;
    }
    post({ ...form, latitude, longitude });
  };
  useEffect(() => {
    if (data && data?.ok) {
      router.replace(`/community/${data.post.id}`);
    }
  }, [data, router]);
  return (
    <>
      <PageTitle title="Community Ask" />
      <form onSubmit={handleSubmit(onValid)} className="px-2 py-3">
        <Textarea
          register={register("question", { required: true })}
          placeholder="Ask a question"
          required
          name="description"
        />
        <Button text={loading ? "Loading..." : "Ask"} />
      </form>
    </>
  );
};

export default CommunityAsk;
