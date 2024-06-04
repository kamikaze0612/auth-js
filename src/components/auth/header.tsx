import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type Props = {
  children: React.ReactNode;
};
export const Header: React.FC<Props> = ({ children }) => {
  return <h2 className={cn("text-3xl", font.className)}>{children}</h2>;
};
