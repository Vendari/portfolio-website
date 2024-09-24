import { useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const content = [
  {
    name: "One Money Mail",
    position: "Frontend Developer",
    time: "2020 - 2022",
    description: (
      <p>
        My role involved implementing a <b>new frontend architecture</b> using{" "}
        <b>React</b> and <b>React Native</b>. I managed <b>legacy systems</b>{" "}
        and developed new solutions for one of the largest Polish{" "}
        <b>fintech companies</b>.
      </p>
    ),
    logo: "/ommLogo.jpg",
    color: "cyan",
  },
  {
    name: "Acaisoft",
    position: "Fullstack Developer",
    time: "2022 - 2023",
    description: (
      <p>
        I worked with the <b>AT&T team</b>, focusing on internal <b>CRM</b>{" "}
        systems. My responsibilities included developing and maintaining a
        <b> highly scalable backend</b> using <b>Nest.js</b>, deployed with{" "}
        <b>Kubernetes</b>. Additionally, I supported the frontend team,
        leveraging my experience with <b>React</b>.
      </p>
    ),
    logo: "/acaisoftLogo.jpg",
    color: "violet",
  },
  {
    name: "Acre Software",
    position: "Frontend Developer",
    time: "2023",
    description: (
      <p>
        I was part of the team responsible for the <b>client-facing</b> aspects
        of a<b> mortgage broking platform</b>. My role involved developing new
        features such as <b>document signing</b>, mortgage offer comparisons,
        and revamping the front-end development process.
      </p>
    ),
    logo: "/acreLogo.jpg",
    color: "emerald",
  },
  {
    name: "Integral Reality Labs",
    position: "Technical Lead",
    time: "2023 - 2024",
    description: (
      <p>
        I led a team of five in developing a{" "}
        <b>Web3-based 3D printing platform</b> for games licensed by{" "}
        <b>Ubisoft</b>. Our portfolio included delivering customizable
        3D-printed figurines for popular titles such as <b>Assassin's Creed</b>,{" "}
        <b>For Honor</b> and <b>Rainbow Six Siege</b>.
      </p>
    ),
    logo: "/irlLogo.jpg",
    color: "rose",
  },
  {
    name: "Rectavia Studio",
    position: "Technical Lead",
    time: "2024",
    logo: "/rectaviaLogo.png",
    description: (
      <p>
        I am a <b>co-founder</b> of a Polish/US-based startup specializing in
        games built for the <b>Telegram platform</b>. The team has grown to 7
        members. We are building a <b>gaming platform</b> that will launch
        within the Telegram ecosystem, featuring <b>Web3</b> integration.
      </p>
    ),
    color: "fuchsia",
  },
];

function Experience() {
  const navigate = useNavigate();

  const { height, width } = useWindowDimensions();

  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".content",
      {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        transform: "translate(-50%, -50%)",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        transform: "translate(-50%, -50%)",
      }
    );
  }, []);

  useEffect(() => {
    const scrollListener = (e: WheelEvent) => {
      if (!itemsContainerRef.current) return;

      if (e.deltaY > 0) itemsContainerRef.current.scrollLeft -= 50;
      else itemsContainerRef.current.scrollLeft += 50;
    };

    window.addEventListener("wheel", scrollListener);

    return () => {
      window.removeEventListener("wheel", scrollListener);
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-full pb-10 items-center justify-center text-center ">
      <div className="content absolute top-1/2 left-1/2 z-10 w-full flex flex-col items-center gap-2 justify-center h-full">
        {height > 900 && width > 500 ? (
          <>
            <div className="h-2 w-screen bg-white" />

            <div
              ref={itemsContainerRef}
              className="flex  absolute w-full py-60"
              style={{ overflowX: "scroll" }}
            >
              {content.map((experience, i) => (
                <Card
                  key={experience.name}
                  style={{
                    ...(i % 2 ? { marginTop: 300 } : { marginBottom: 300 }),
                    ...(i === 0 && { marginLeft: 50 }),
                    ...(i === content.length - 1 && { marginRight: 50 }),
                  }}
                  className={`min-w-[400px] text-start border-0 bg-${experience.color}-100`}
                >
                  <CardHeader className="pb-2 flex-row items-start w-full gap-2">
                    <img
                      src={import.meta.env.BASE_URL + experience.logo}
                      className="w-20 h-20 object-contain bg-white rounded-full"
                    />
                    <div className={`flex flex-col`}>
                      <CardTitle
                        className={`text-white font-bold text-${experience.color}-600`}
                      >
                        {experience.position}
                      </CardTitle>
                      <CardDescription
                        className={`text-${experience.color}-600`}
                      >
                        {experience.name}
                        <br />
                        {experience.time}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent
                    className={`text-start text-sm text-white text-${experience.color}-500`}
                  >
                    {experience.description}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="absolute bottom-40 flex w-full items-center justify-around pt-3">
              <Button
                variant="ghost"
                className="opacity-90 hover:opacity-80 text-neutral-50 hover:text-neutral-700 gap-2"
                onClick={() => navigate("/about")}
              >
                <RxArrowLeft size={20} />
                About
              </Button>
              <Button
                variant="ghost"
                className="opacity-90 hover:opacity-80 animate-wiggle text-neutral-50 hover:text-neutral-700 gap-2"
                onClick={() => navigate("/education")}
              >
                Education
                <RxArrowRight size={20} />
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* (top-16) 4rem + (navigation buttons bottoom-20) 5rem + (for spacing) 3rem  */}
            <div className="flex flex-col gap-10 fixed px-4 overflow-auto h-full top-16 max-h-[calc(100%_-_12rem)] py-20 w-screen">
              {[...content].reverse().map((experience) => (
                <Card
                  key={experience.name}
                  className={`animate-float-sm text-start border-0 bg-${experience.color}-100 m-0`}
                >
                  <CardHeader className="pb-2 flex-row items-start w-full gap-2">
                    <img
                      src={import.meta.env.BASE_URL + experience.logo}
                      className="w-20 h-20 object-contain bg-white rounded-full"
                    />
                    <div className={`flex flex-col`}>
                      <CardTitle
                        className={`text-white font-bold text-${experience.color}-600`}
                      >
                        {experience.position}
                      </CardTitle>
                      <CardDescription
                        className={`text-${experience.color}-600`}
                      >
                        {experience.name}
                        <br />
                        {experience.time}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent
                    className={`text-start text-sm text-white text-${experience.color}-500`}
                  >
                    {experience.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
      {!(height > 900 && width > 500) && (
        <div className="fixed bottom-20 left-0 z-20 flex w-full items-center justify-around pt-3">
          <Button
            variant="secondary"
            className="opacity-90 hover:opacity-80 gap-2"
            onClick={() => navigate("/about")}
          >
            <RxArrowLeft size={20} />
            About
          </Button>
          <Button
            variant="secondary"
            className="opacity-90 hover:opacity-80 animate-wiggle gap-2"
            onClick={() => navigate("/education")}
          >
            Education
            <RxArrowRight size={20} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default Experience;
