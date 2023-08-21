import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const useUser = () => {
  const { data, error } = useSWR("/api/users/profile");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
  }, [data, router]);
  return { error, isLoading: !data && !error, user: data?.profile };
};

export default useUser;
