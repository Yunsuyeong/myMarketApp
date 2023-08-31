import Button from "@/components/button";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { useForm } from "react-hook-form";
import { Live } from "@prisma/client";
import useMutation from "@/utils/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface ICreateForm {
  name?: string;
  price?: string;
  description?: string;
}

interface IMutationResult {
  ok: boolean;
  live: Live;
}

const LiveCreate: NextPage = () => {
  const router = useRouter();
  const [create, { data, loading }] = useMutation<IMutationResult>("/api/live");
  const { register, handleSubmit } = useForm<ICreateForm>();
  const onValid = (form: ICreateForm) => {
    create(form);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.replace(`/live/${data.live.id}`);
    }
  }, [data, router]);
  return (
    <>
      <PageTitle title="Live Create" />
      <form onSubmit={handleSubmit(onValid)} className="px-3 py-4 space-y-4">
        <Input
          name="name"
          label="Name"
          required
          type="text"
          placeholder="Write a Name"
          register={register("name", { required: true })}
        />
        <Input
          name="price"
          label="Price"
          kind="price"
          required
          type="number"
          placeholder="0.00"
          register={register("price", { required: true })}
        />
        <Textarea
          register={register("description", { required: true })}
          required
          name="description"
          label="Description"
        />
        <Button text={loading ? "Loading..." : "Go to Live"} />
      </form>
    </>
  );
};

export default LiveCreate;
