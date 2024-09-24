import { FC } from "react";
import { Button } from "./ui/button";
import { RxDownload } from "react-icons/rx";

export const TopBar: FC = () => (
  <div className="flex w-full justify-between h-16 items-center px-3 fixed top-0 left-0 max-w-[1280px] transform -translate-x-1/2 left-1/2 z-10">
    <h2 className="font-semibold text-2xl">JB</h2>
    <Button
      onClick={() =>
        window.open(
          import.meta.env.BASE_URL + "/JakubBrodeckiResume.pdf",
          "_blank"
        )
      }
      size="lg"
      variant="secondary"
      className="gap-2 animate-wiggle"
    >
      <RxDownload size={20} /> Resume
    </Button>
  </div>
);
