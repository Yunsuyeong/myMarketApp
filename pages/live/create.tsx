import Button from "@/components/button";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import Input from "@/components/input";
import Textarea from "@/components/textarea";

const LiveCreate: NextPage = () => {
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
        />
        <Input
          name="price"
          label="Price"
          kind="price"
          required
          type="number"
          placeholder="0.00"
        />
        <Textarea name="description" label="Description" />
        <Button text="Go to Live" />
      </div>
    </>
  );
};

export default LiveCreate;
