import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { auth } from "@/auth";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div className="space-x-2">
          {!session ? (
            <LoginButton>
              <Button variant={"secondary"} size={"lg"}>
                Masuk
              </Button>
            </LoginButton>
          ) : (
            <Link href={"/settings"}>
              <Button variant={"default"} size={"lg"}>
                Settings
              </Button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
