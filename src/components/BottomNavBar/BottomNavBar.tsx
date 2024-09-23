import { FC, useEffect, useRef, useState } from "react";

import "./styles.css";
import { RxBackpack, RxHome, RxPerson, RxReader } from "react-icons/rx";
import { MdOutlinePhone } from "react-icons/md";
import { IconBaseProps } from "react-icons/lib";
import { NavLink, useLocation } from "react-router-dom";

const routes = [
  {
    name: "Home",
    href: "/",
    icon: (props: IconBaseProps) => <RxHome {...props} />,
  },
  {
    name: "About Me",
    href: "/about",
    icon: (props: IconBaseProps) => <RxPerson {...props} />,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: (props: IconBaseProps) => <RxBackpack {...props} />,
  },
  {
    name: "Education",
    href: "/education",
    icon: (props: IconBaseProps) => <RxReader {...props} />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: (props: IconBaseProps) => <MdOutlinePhone {...props} />,
  },
];

export const BottomNavBar: FC = () => {
  const [active, setActive] = useState(0);
  const jumpAnimation = useRef(0);

  const location = useLocation();

  const indicatorPosition = active * 20;

  useEffect(() => {
    jumpAnimation.current = jumpAnimation.current === 0 ? 1 : 0;

    setActive((prevActive) => {
      const newActive = routes.findIndex(
        ({ href }) => location.pathname === href
      );
      if (newActive < 0) return prevActive;
      return newActive;
    });
  }, [location.pathname]);

  return (
    <div className="flex h-14 xs:h-24 to-transparent w-full justify-around items-center fixed z-10 bottom-0 left-0 text-slate-500 bg-gradient-to-t from-amber-50">
      <div className="relative flex w-full h-full max-w-[1280px]">
        {routes.map((route) => {
          return (
            <NavLink
              key={route.name}
              to={route.href}
              style={({ isActive }) => ({
                color: isActive ? "black" : "gray",
                transition: "300ms",
              })}
              className={`cursor-pointer w-full h-full z-10 flex flex-col items-center pb-3 justify-end text-center font-medium`}
            >
              {({ isActive, isTransitioning }) => (
                <>
                  {route.icon({
                    size: isActive ? 28 : 20,
                    style: { transition: "300ms" },
                  })}
                  {isActive || isTransitioning ? (
                    <span className="hidden xs:block">{route.name}</span>
                  ) : (
                    ""
                  )}
                </>
              )}
            </NavLink>
          );
        })}
        <div
          style={{
            left: `${indicatorPosition}%`,
            transition: "300ms ease-in-out",
            animation: `jump${jumpAnimation.current} 300ms ease-in-out`,
            width: `${100 / routes.length}%`,
          }}
          className={`h-6 bottom-10 xs:bottom-16 absolute z-5 flex justify-center items-center`}
        >
          <img
            src={import.meta.env.BASE_URL + "/circle.svg"}
            className="w-3 shadow rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
