import gsap from "gsap";

export const gsapLoader = () => {
  return gsap.to(".content", { opacity: 0, y: -100, duration: 0.3 });
};
