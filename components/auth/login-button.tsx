"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
}: // mode = "redirect",
// asChild,
LoginButtonProps) => {
  const router = useRouter();

  const clickButton = () => {
    router.push("/auth/login");
  };

  return (
    <span onClick={clickButton} className="cursor-pointer">
      {children}
    </span>
  );
};
