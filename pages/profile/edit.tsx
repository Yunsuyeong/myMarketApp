import { NextPage } from "next";
import Button from "@/components/button";
import Input from "@/components/input";
import PageTitle from "@/components/pageTitle";
import { useForm } from "react-hook-form";

interface IEditForm {
  email?: string;
  phone?: string;
}

const ProfileEdit: NextPage = () => {
  const { register, handleSubmit } = useForm<IEditForm>();
  return (
    <div className="px-3 py-4 space-y-4">
      <PageTitle title="Profile Edit" />
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full bg-white" />
        <label
          htmlFor="picture"
          className="px-2 py-3 rounded-sm shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border border-white cursor-pointer"
        >
          Change
          <input type="file" className="hidden" id="picture" accept="image/*" />
        </label>
      </div>
      <div className="space-y-2">
        <Input
          register={register("email", { required: true })}
          label="Email Address"
          name="email"
          type="text"
          required
        />
        <Input
          register={register("phone", { required: true })}
          label="Phone Number"
          name="phone"
          type="number"
          kind="phone"
          required
        />
      </div>
      <Button text="Edit Profile" />
    </div>
  );
};

export default ProfileEdit;
