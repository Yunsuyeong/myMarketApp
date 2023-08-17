import Button from "@/components/button";
import PageTitle from "@/components/pageTitle";
import Textarea from "@/components/textarea";
import { NextPage } from "next";

const CommunityAsk: NextPage = () => {
  return (
    <>
      <PageTitle title="Community Ask" />
      <form className="px-2 py-3">
        <Textarea placeholder="Ask a question" required name="description" />
        <Button text="Ask" />
      </form>
    </>
  );
};

export default CommunityAsk;
