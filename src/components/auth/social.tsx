import { FaGithub, FaGoogle } from "react-icons/fa6";

import { Button } from "../ui/button";

export const Social: React.FC = () => {
  return (
    <div className="flex gap-x-4 items-center w-full">
      <Button variant="outline" className="w-full">
        <FaGithub className="size-5" />
      </Button>
      <Button variant="outline" className="w-full">
        <FaGoogle className="size-5" />
      </Button>
    </div>
  );
};
