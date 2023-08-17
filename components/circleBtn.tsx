import React from "react";
import Link from "next/link";

interface ICircleBtn {
  href: string;
  children: React.ReactNode;
}

const CircleBtn = ({ href, children }: ICircleBtn) => {
  return (
    <Link href={href}>
      <button className="fixed bottom-20 right-4 p-4 shadow-md rounded-full bg-green-300 hover:bg-green-500 transition-colors cursor-pointer">
        {children}
      </button>
    </Link>
  );
};

export default CircleBtn;
