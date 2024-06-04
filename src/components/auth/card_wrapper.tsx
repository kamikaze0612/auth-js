import Link from "next/link";

import { Header } from "./header";
import { Social } from "./social";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

type Props = {
  backButtonLabel: string;
  backButtonHref: string;
  headerLabel: string;
  showSocial?: boolean;
  children: React.ReactNode;
};
export const CardWrapper: React.FC<Props> = ({
  backButtonHref,
  backButtonLabel,
  headerLabel,
  showSocial,
  children,
}) => {
  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <Header>🔐 {headerLabel}</Header>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <Button asChild variant="link" className="text-center w-full">
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
