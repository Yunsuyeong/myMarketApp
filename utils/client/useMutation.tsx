import { useState } from "react";

interface IUseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

type useMutationResult<T> = [(data: any) => void, IUseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): useMutationResult<T> {
  const [result, setResult] = useState<IUseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const mutation = (data: any) => {
    setResult((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json().catch(() => {}))
      .then((data) => setResult((prev) => ({ ...prev, data, loading: false })))
      .catch((error) =>
        setResult((prev) => ({ ...prev, error, loading: false }))
      );
  };
  return [mutation, { ...result }];
}
