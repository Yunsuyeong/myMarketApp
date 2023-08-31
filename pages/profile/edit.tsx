import { NextPage } from "next";
import Button from "@/components/button";
import Input from "@/components/input";
import PageTitle from "@/components/pageTitle";
import { useForm } from "react-hook-form";
import useUser from "@/utils/client/useUser";
import { useEffect } from "react";
import useMutation from "@/utils/client/useMutation";
import { useRouter } from "next/router";

interface IEditForm {
  name?: string;
  email?: string;
  phone?: string;
  formErrors?: string;
}

interface IMutationResult {
  ok: boolean;
  error?: string;
}

const ProfileEdit: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const [editProfile, { data, loading }] =
    useMutation<IMutationResult>("/api/users/profile");
  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditForm>();
  useEffect(() => {
    if (user?.name) {
      setValue("name", user?.name);
    }
    if (user?.email) {
      setValue("email", user?.email);
    }
    if (user?.phone) {
      setValue("phone", user?.phone);
    }
  }, [user, setValue]);
  const onValid = ({ name, email, phone }: IEditForm) => {
    if (loading) {
      return;
    }
    if (name === "" && email === "" && phone === "") {
      setError("formErrors", {
        message:
          "Name or Email Address or Phone Number are required to edit your profile",
      });
    }
    editProfile({ name, email, phone });
  };
  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data.error });
    }
    if (data && data.ok) {
      router.replace("/profile");
    }
  }, [data, router]);
  return (
    <>
      <PageTitle title="Profile Edit" />
      <form onSubmit={handleSubmit(onValid)} className="px-3 py-4 space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full bg-white" />
          <label
            htmlFor="picture"
            className="px-2 py-3 rounded-sm shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border border-white cursor-pointer"
          >
            Change
            <input
              type="file"
              className="hidden"
              id="picture"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-2">
          <Input
            register={register("name")}
            label="Name"
            name="name"
            type="text"
            required={false}
          />
          <Input
            register={register("email")}
            label="Email Address"
            name="email"
            type="text"
            required={false}
          />
          <Input
            register={register("phone")}
            label="Phone Number"
            name="phone"
            type="text"
            kind="phone"
            required={false}
          />
          {errors.formErrors ? (
            <span className="my-2 block text-center text-red-500 font-medium">
              {errors.formErrors.message}
            </span>
          ) : null}
        </div>
        <Button text={loading ? "Loading..." : "Edit Profile"} />
      </form>
    </>
  );
};

export default ProfileEdit;
