// import { useEffect, useRef, useState } from "react";
// import { LogoSvg } from "./IconsSVg";
// import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// interface navPath {
//   id: number;
//   path: string;
//   name: string;
//   subItemsOf?: string;
// }
// const Menu = () => {
//   const navPath: navPath[] = [
//     { id: 1, path: "/", name: "Property" },
//     { id: 2, path: "/", name: "Long Terms Rentals", subItemsOf: "services" },
//     { id: 3, path: "/", name: "Holidays Letting", subItemsOf: "services" },
//     { id: 4, path: "/", name: "Blog" },
//     { id: 5, path: "/", name: "Contact" },
//   ];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const container = useRef(null);
//   const svgStart = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
//   const svgEnd = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
//   const menuOpentl = useRef();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useGSAP(
//     () => {
//       gsap.set(".menu-link-item-holder", { y: 100 });
//       menuOpentl.current = gsap
//         .timeline({ paused: true })
//         // .to(".menu-open", {
//         //   duration: 0.3,
//         //   opacity: 0,
//         //   ease: "Power1.out",
//         // })
//         .to(".menu-overlayer", {
//           duration: 0,
//           clipPath: "polygon(0% 0% ,100% 0%, 100% 100% ,0% 100%)",
//           ease: "Power2.easeOut",
//           delay: -0.1,
//         })

//         .to(".bg-svg-ani", 0.8, {
//           attr: { d: svgStart },
//           ease: "Power2.easeIn",
//         })
//         .to(".bg-svg-ani", 0.8, {
//           attr: { d: svgEnd },
//           ease: "Power2.easeOut",
//         })
//         .to(".menu-link-item-holder", {
//           y: 0,
//           stagger: 0.1,
//           ease: "power4.inOut",
//           delay: -0.75,
//         });
//     },
//     { scope: container }
//   );

//   useEffect(() => {
//     if (isMenuOpen) {
//       console.log("iam play ");
//       menuOpentl.current.play();
//     } else {
//       console.log("iam reverse ");

//       menuOpentl.current.reverse();
//     }
//   }, [isMenuOpen]);

//   return (
//     <div className="menu-container relative" ref={container}>
//       <div className="menu-bar">
//         <div className="w-full  px-16 py-9  justify-between items-center inline-flex  relative">
//           <div className="justify-start items-center gap-2.5 flex karma-logo">
//             <Link to={"/"} className="flex gap-2 ">
//               <LogoSvg className=" stroke-primary-500  w-9 h-9" />
//               <h1 className="text-primary-500 uppercase text-3xl font-bold tracking-[10px] font-['Inter']">
//                 KARMA
//               </h1>
//             </Link>
//           </div>
//           <div>
//             <button
//               id="menu-button"
//               className="menu-button text-2xl text-primary-500 font-semibold tracking-wider uppercase  relative"
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//               }}
//             >
//               <div className="h-7">
//                 <div
//                   className="menu-open relative translate-y-[0] inline-block"
//                   onClick={toggleMenu}
//                 >
//                   {isMenuOpen ? "CLOSE" : " MENU"}
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="menu-overlayer  fixed top-0 left-0 w-screen h-screen  bg-transparent z-30 flex flex-col">
//         {/* <svg
//           className="transition bg-svg-ani w-screen h-screen"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//         >
//           <path
//             className="bg-svg-ani"
//             stroke="#000"
//             strokeWidth="2px"
//             dur="10s"
//             vectorEffect="non-scaling-stroke"
//             d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
//           />
//           <animateMotion dur="10s" repeatCount="indefinite">
//             <mpath xlinkHref="#path" />
//           </animateMotion>
//         </svg> */}
//         <svg
//           className="transition  w-screen h-screen rotate-180"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//         >
//           <path
//             className="bg-svg-ani"
//             stroke="#000"
//             strokeWidth="2px"
//             dur="10s"
//             vectorEffect="non-scaling-stroke"
//             d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
//           />
//           <animateMotion dur="10s" repeatCount="indefinite">
//             <mpath xlinkHref="#path" />
//           </animateMotion>
//           {/* <foreignObject>
//             <div className="menu-link-item-holder">
//               <h1>Hellow</h1>
//             </div>
//           </foreignObject> */}
//         </svg>
//         <div className="absolute w-full h-screen top-0 left-0 w">
//           <div className="menu-overlayer-bar">
//             <div className="w-full  px-16 py-9  justify-between items-center inline-flex z-50 relative">
//               <div className="justify-start items-center gap-2.5 flex karma-logo">
//                 <Link to={"/"} className="flex gap-2 ">
//                   <LogoSvg className=" stroke-primary-500  w-9 h-9" />
//                   <h1 className="text-primary-500 uppercase text-3xl font-bold tracking-[10px] font-['Inter']">
//                     KARMA
//                   </h1>
//                 </Link>
//               </div>
//               <div>
//                 <button
//                   id="menu-button"
//                   className="menu-button text-2xl text-primary-500 font-semibold tracking-wider uppercase  relative"
//                   onClick={() => {
//                     setIsMenuOpen(!isMenuOpen);
//                   }}
//                 >
//                   <div className="h-7">
//                     <div
//                       className="menu-open relative translate-y-[0] inline-block"
//                       onClick={toggleMenu}
//                     >
//                       {isMenuOpen ? "CLOSE" : " MENU"}
//                     </div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="menu-copy flex flex-col justify-center items-end pr-28 pt-24">
//             {navPath.map((item) => {
//               return (
//                 <li
//                   className="menu-link-item w-max  overflow-hidden clip"
//                   key={item.id}
//                 >
//                   <div
//                     onClick={toggleMenu}
//                     className="menu-link-item-holder p-0  overflow-hidden relative mr-16 flex    item-center justify-center hover:text-green group  hover:font-bold mb-0"
//                   >
//                     <span className="font-bold text-lg">{item.id}</span>
//                     <Link
//                       to={item.path}
//                       key={item.id}
//                       className="p-0 menu-link text-primary-500  font-bold font-['Inter'] uppercase tracking-widest  group-hover:text-white transition text-[7vh]  relative  block "
//                     >
//                       {item.name}
//                     </Link>
//                   </div>
//                 </li>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
