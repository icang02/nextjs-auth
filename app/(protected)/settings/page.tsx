import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { auth, signOut } from "@/auth";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function SettingsPage() {
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
        <p className="text-white text-lg">{JSON.stringify(session)}</p>
        <div className="space-x-2">
          <Link href={"/"}>
            <Button variant={"default"} size={"lg"}>
              Home Page
            </Button>
          </Link>
          <form
            action={async () => {
              "use server";
              await signOut({
                redirectTo: "/auth/login",
              });
            }}
            className="inline"
          >
            <Button type="submit" variant={"secondary"} size={"lg"}>
              Logout
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
