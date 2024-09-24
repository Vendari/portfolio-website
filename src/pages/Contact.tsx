import { useLayoutEffect } from "react";
import { Button } from "../components/ui/button";
import {
  RxArrowLeft,
  RxEnvelopeClosed,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "@/hooks/useWindowDimensions";

function Contact() {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();

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
          <div className="flex flex-col items-center gap-4">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl z-10 text-white">
              Find me
            </h1>
            <div className="flex gap-3 w-full justify-center">
              <Button
                onClick={() => {
                  window.location.assign("mailto:jakub.brodecki@yahoo.com");
                }}
                className="px-3"
                variant="link"
              >
                <RxEnvelopeClosed size={40} />
              </Button>
              <Button
                variant="link"
                className="px-3"
                onClick={() =>
                  window.open("https://github.com/vendari", "_blank")
                }
              >
                <RxGithubLogo size={40} />
              </Button>
              <Button
                variant="link"
                className="px-3"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/vendari/", "_blank")
                }
              >
                <RxLinkedinLogo size={40} />
              </Button>
            </div>
            <div className="flex w-full items-center justify-around pt-3">
              <Button
                variant={!(height > 900 && width > 500) ? "secondary" : "ghost"}
                className={`opacity-90 hover:opacity-80 ${
                  height > 900 &&
                  width > 500 &&
                  "text-neutral-50 hover:text-neutral-700"
                } gap-2`}
                onClick={() => navigate("/education")}
              >
                <RxArrowLeft size={20} />
                Education
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
