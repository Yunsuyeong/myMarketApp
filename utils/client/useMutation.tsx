import { useState } from "react";

interface IUseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type useMutationResult = [(data: any) => void, IUseMutationState];

const useMutation = (url: string): useMutationResult => {
  const [result, setResult] = useState({
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
      .then((data) => setResult((prev) => ({ ...prev, data })))
      .catch((error) => setResult((prev) => ({ ...prev, error })))
      .finally(() => setResult((prev) => ({ ...prev, loading: false })));
  };
  return [mutation, { ...result }];
};

export default useMutation;
