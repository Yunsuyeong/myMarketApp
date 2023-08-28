import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface IProfileResponse {
  ok: boolean;
  profile: User;
}

const useUser = () => {
  const { data, error } = useSWR<IProfileResponse>("/api/users/profile");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
    if (data && data.ok && router.pathname === "/enter") {
      router.replace("/profile");
    }
  }, [data, router]);
  return { error, isLoading: !data && !error, user: data?.profile };
};

export default useUser;
