import React, { useEffect } from "react";
import Footer from "./Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./Header";
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
    <div className="bg-text-black relative bg-[url('/assets/images/bg-cloud.webp')] h-full bg-center bg-cover bg-blend-luminosity bg-fixed animate-layout">
      <div className=" bg-text-black bg-opacity-70">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
