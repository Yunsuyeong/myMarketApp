import { useState } from "react";

const Enter = () => {
  const [auth, setAuth] = useState<"email" | "phone">("email");
  const onEmailClick = () => setAuth("email");
  const onPhoneClick = () => setAuth("phone");
  return <div></div>;
};

export default Enter;
