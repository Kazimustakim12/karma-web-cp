import { useEffect, useRef, useState } from "react";
import { LogoSvg } from "./IconsSVg";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfiniteMenu from "../../utils/InfiniteScroll";
import { TbXboxA } from "react-icons/tb";
interface navPath {
  id: number;
  path: string;
  name: string;
  subItemsOf?: string;
}
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navPath: navPath[] = [
    { id: 1, path: "/property-management", name: "PROPERTY MANAGEMENT" },
    {
      id: 2,
      path: "/long-term-rental",
      name: "Long Terms Rentals",
      subItemsOf: "services",
    },
    {
      id: 3,
      path: "/holiday-letting",
      name: "Holidays Letting",
      subItemsOf: "services",
    },
    { id: 4, path: "/", name: "Blog" },
    { id: 5, path: "/contact", name: "Contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef(null);
  const svgStart = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const svgEnd = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
  const menuOpentl = useRef();
  const htmlTag = document.querySelector("html.lenis");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      // const menu = new InfiniteMenu(document.querySelector(".menu-copy"))  ;
      gsap.set(".menu-link-item-holder", { y: 100 });
      menuOpentl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlayer", {
          duration: 0,
          clipPath: "polygon(0% 0% ,100% 0%, 100% 100% ,0% 100%)",
          ease: "Power2.easeOut",
          delay: -0.1,
        })
        .to(".bg-svg-ani", 0.8, {
          attr: { d: svgStart },
          ease: "Power2.easeIn",
        })
        .to(".bg-svg-ani", 0.8, {
          attr: { d: svgEnd },
          ease: "Power2.easeOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isMenuOpen) {
      console.log("iam play ");
      menuOpentl.current.play();
      htmlTag?.classList.add("overflow-hidden");
    } else {
      console.log("iam reverse ");
      menuOpentl.current.reverse();
      htmlTag?.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container " ref={container}>
      <div className="menu-bar translate-y-[-60px] opacity-0">
        <div className="w-full md:px-16 px-4 py-5 justify-between items-center inline-flex relative ">
          <div className="justify-start items-center gap-2.5 flex karma-logo">
            <Link to={"/"} className="flex gap-2 items-center">
              <LogoSvg className="stroke-primary-500 md:w-9 md:h-9 w-8 h-8" />
              <h1 className="text-primary-500 uppercase md:text-3xl text-xl font-bold tracking-[10px] font-['Inter']">
                KARMA
              </h1>
            </Link>
          </div>
          <div>
            <button
              id="menu-button"
              className="menu-button md:text-2xl text-xl text-primary-500 font-semibold tracking-wider uppercase  relative"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div className="h-7">
                <div
                  className="menu-open relative md:text-2xl text-xl translate-y-[0] inline-block"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? "CLOSE" : " MENU"}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="menu-overlayer  fixed top-0 left-0 w-full h-screen  bg-transparent z-30 flex flex-col">
        <svg
          className="transition  w-screen h-screen rotate-180"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="bg-svg-ani"
            stroke="#000"
            strokeWidth="2px"
            dur="10s"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
          <animateMotion dur="10s" repeatCount="indefinite">
            <mpath xlinkHref="#path" />
          </animateMotion>
        </svg>
        <div className="absolute w-full h-screen top-0 left-0 w">
          <div className="menu-overlayer-bar">
            <div className="w-full  md:px-16 px-4 py-5  justify-between items-center inline-flex z-50 relative">
              <div className="justify-start items-center gap-2.5 flex karma-logo">
                <Link to={"/"} className="flex gap-2 items-center">
                  <LogoSvg className=" stroke-primary-500  md:w-9 md:h-9 w-8 h-8" />
                  <h1 className="text-primary-500 uppercase md:text-3xl text-xl font-bold tracking-[10px] font-['Inter']">
                    KARMA
                  </h1>
                </Link>
              </div>
              <div>
                <button
                  id="menu-button"
                  className="menu-button md:text-2xl text-xl text-primary-500 font-semibold tracking-wider uppercase  relative"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <div className="h-7">
                    <div
                      className="menu-open md:text-2xl text-xl relative translate-y-[0] inline-block"
                      onClick={toggleMenu}
                    >
                      {isMenuOpen ? "CLOSE" : " MENU"}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="menu-copy flex flex-col justify-center items-end lg:pr-28 lg:pt-24 md:pr-5 md:pt-5 h-[80vh]">
            {navPath.map((item) => {
              return (
                <li
                  className="menu-link-item w-max overflow-hidden clip"
                  key={item.id}
                >
                  <div
                    onClick={toggleMenu}
                    className="menu-link-item-holder p-0 overflow-hidden relative lg:mr-16 mr-[16px] flex item-center justify-center hover:text-green group hover:font-bold mb-0"
                  >
                    <span className="font-bold lg:text-lg text-sm">
                      ({item.id})
                    </span>
                    <Link
                      to={item.path}
                      key={item.id}
                      className="p-0 menu-link text-primary-500  font-bold font-['Inter'] uppercase tracking-widest  group-hover:text-white transition  lg:text-[7vh] sm:text-[5vh] text-[3vh]   relative  block "
                    >
                      {item.name}
                    </Link>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
