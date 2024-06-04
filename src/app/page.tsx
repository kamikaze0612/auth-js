import { Poppins } from "next/font/google";

import { CardWrapper } from "@/components/auth/card_wrapper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const Homepage: React.FC = () => {
  return (
    <main
      className={cn(
        "min-h-screen flex flex-col items-center justify-center w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8E2DE2] to-[#4A00E0] text-white gap-y-6",
        font.className
      )}
    >
      <h1 className="text-6xl font-semibold">🔐 Auth</h1>
      <p className="text-lg font-normal text-slate-100">
        You authentication system
      </p>
      <Button variant="secondary" asChild>
        <Link href="/auth/login">Start locking!</Link>
      </Button>
    </main>
  );
};

export default Homepage;
