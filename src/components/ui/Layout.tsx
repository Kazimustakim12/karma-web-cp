import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Menu from "./Menu";
const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // const lenis = new Lenis({
    //   duration: 0.7,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   infinite: false,
    // });
    // lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress });
    //   ScrollTrigger.update();
    // });
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000);
    // });
    // gsap.ticker.lagSmoothing(0);
    // const lenis = new Lenis({
    //   smoothWheel: true,
    //   duration: 3,
    // });
    // lenis.on("scroll", ScrollTrigger.update);
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000);
    // });
    // gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <div className="bg-text-black relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
