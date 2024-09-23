import { useLayoutEffect } from "react";
import { Button } from "../components/ui/button";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

function Education() {
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

  return (
    <div className="flex flex-col h-full w-full pb-10 items-center justify-center text-center ">
      <div className="content absolute top-1/2 left-1/2 z-10 w-full lg:w-[70%] flex flex-col items-center gap-2 justify-center">
        <div className="flex flex-col md:flex-row items-center justify-around w-full gap-12 px-4 md:px-0">
          <img
            src="/coventryUniversityLogo.png"
            width={100}
            height={100}
            className="w-2/3 md:w-1/3 aspect-square object-cover rounded-full bg-white animate-float p-5"
          />
          <div className="flex flex-col items-start text-start">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl z-10 text-white">
              Bachelor of Science
            </h1>
            <p className="text-2xl text-neutral-50 font-semibold opacity-90">
              with Honours First Class
            </p>
            <p className="text-2xl text-neutral-50 font-semibold opacity-90">
              in Computer Science
            </p>
            <div className="flex w-full items-center justify-around pt-3">
              <Button
                variant="ghost"
                className="opacity-90 hover:opacity-80  text-neutral-50 hover:text-neutral-700 gap-2"
                onClick={() => navigate("/experience")}
              >
                <RxArrowLeft size={20} />
                Experience
              </Button>
              <Button
                variant="ghost"
                className="opacity-90 hover:opacity-80 animate-wiggle text-neutral-50 hover:text-neutral-700 gap-2"
                onClick={() => navigate("/contact")}
              >
                Contact
                <RxArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
