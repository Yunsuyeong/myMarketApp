import Button from "@/components/button";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { useForm } from "react-hook-form";

interface ICreateForm {
  name?: string;
  price?: string;
  description?: string;
}

const LiveCreate: NextPage = () => {
  const { register, handleSubmit } = useForm<ICreateForm>();
  return (
    <>
      <PageTitle title="Live Create" />
      <div className="px-3 py-4 space-y-4">
        <Input
          name="name"
          label="Name"
          required
          type="email"
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
        <Button text="Go to Live" />
      </div>
    </>
  );
};

export default LiveCreate;
