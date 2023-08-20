import Button from "@/components/button";
import PageTitle from "@/components/pageTitle";
import Textarea from "@/components/textarea";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

interface IAskForm {
  description?: string;
}

const CommunityAsk: NextPage = () => {
  const { register, handleSubmit } = useForm<IAskForm>();
  return (
    <>
      <PageTitle title="Community Ask" />
      <form className="px-2 py-3">
        <Textarea
          register={register("description", { required: true })}
          placeholder="Ask a question"
          required
          name="description"
        />
        <Button text="Ask" />
      </form>
    </>
  );
};

export default CommunityAsk;
