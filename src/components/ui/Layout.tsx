import React, { useEffect } from "react";
import Footer from "./Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./Header";
import CustomCursor from "../../utils/customcursor";
// import Menu from "./Menu";
const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {}, []);
  useGSAP(() => {
    const headerRevel = () => {
      return gsap.to(".menu-bar", {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 1,
      });
    };
    // const animateLayoutAfterLoad = gsap.timeline({ repeat: 0, yoyo: false });
    // animateLayoutAfterLoad.fromTo(
    //   ".animate-layout",
    //   { opacity: 0 },
    //   { opacity: 1 }
    // );
    headerRevel();
  });
  return (
    <>
      <CustomCursor cursor=".v-cursor" dot=".v-dot">
        <div className="bg-text-black  bg-[url('/assets/images/bg-cloud.webp')] w-full  z-[-1] h-screen bg-center bg-cover  bg-no-repeat bg-blend-luminosity fixed animate-layout"></div>
        <div className=" bg-text-black bg-opacity-70 h-full relative top-0 w-full z-[1]">
          <Header />
          {children}
          <Footer />
        </div>
      </CustomCursor>
    </>
  );
};

export default Layout;
