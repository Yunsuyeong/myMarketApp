import Button from "@/components/button";
import Input from "@/components/input";
import PageTitle from "@/components/pageTitle";
import Textarea from "@/components/textarea";
import useMutation from "@/utils/client/useMutation";
import { Item } from "@prisma/client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IUploadForm {
  name?: string;
  price?: string;
  description?: string;
}

interface IMutationResult {
  ok: boolean;
  item: Item;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IUploadForm>();
  const [uploadItem, { loading, data }] =
    useMutation<IMutationResult>("/api/items");
  const onValid = (form: IUploadForm) => {
    if (loading) {
      return;
    }
    uploadItem(form);
  };
  useEffect(() => {
    if (data && data?.ok) {
      router.replace(`/items/${data.item.id}`);
    }
  }, [data, router]);
  return (
    <div className="px-3 py-4">
      <PageTitle title="Item Upload" />
      <div>
        <label className="w-full h-48 flex justify-center items-center border-2 border-dashed border-white rounded-sm hover:border-blue-500">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input className="hidden" type="file" />
        </label>
      </div>
      <form onSubmit={handleSubmit(onValid)} className="my-3">
        <Input
          register={register("name", { required: true })}
          required
          name="name"
          label="Name"
          type="text"
        />
        <Input
          register={register("price", { required: true })}
          required
          label="Price"
          name="price"
          kind="price"
          type="text"
        />
        <Textarea
          register={register("description", { required: true })}
          required
          label="Description"
          name="description"
        />
        <Button text={loading ? "Loading..." : "Upload Item"} />
      </form>
    </div>
  );
};

export default Upload;
