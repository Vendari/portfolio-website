import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { RxArrowRight } from "react-icons/rx";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import useWindowDimensions from "@/hooks/useWindowDimensions";

function Home() {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    gsap.fromTo(
      ".content",
      {
        opacity: 0,
        scale: 0.5,
        y: -300,
        duration: 0.8,
        transform: "translate(-50%, 0%)",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        transform: "translate(-50%, -50%)",
      }
    );
  }, []);

  const { height, width } = useWindowDimensions();

  return (
    <div className="flex flex-col h-full w-full pb-10 items-center justify-center text-center ">
      <div className="content absolute top-1/2 left-1/2 z-10 w-full flex flex-col items-center gap-1 justify-center">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-7xl z-10 text-white">
          Jakub Brodecki
        </h1>
        <p className="text-xl text-neutral-50 font-semibold opacity-90">
          Fullstack Developer with the passion
        </p>
        <Button
          onClick={() => navigate("/about")}
          variant={!(height > 900 && width > 500) ? "secondary" : "ghost"}
          className={`opacity-90 hover:opacity-80 mt-3 animate-wiggle ${
            height > 900 &&
            width > 500 &&
            "text-neutral-50 hover:text-neutral-700"
          } gap-2`}
        >
          About Me
          <RxArrowRight className="" size={20} />
        </Button>
      </div>
    </div>
  );
}

export default Home;
