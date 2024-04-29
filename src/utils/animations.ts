// import gsap from "gsap";

// // OPEN MENU
// export const staggerReveal = (node1, node2) => {
//   gsap.from([node1, node2], {
//     duration: 0.8,
//     height: 0,
//     transformOrigin: "right top",
//     skewY: 2,
//     ease: "power3.inOut",
//     stagger: {
//       amount: 0.1,
//     },
//   });
// };

// // CLOSE MENU
// export const staggerRevealClose = (node1, node2) => {
//   gsap.to([node1, node2], {
//     duration: 0.8,
//     height: 0,
//     ease: "power3.inOut",
//     stagger: {
//       amount: 0.07,
//     },
//   });
// };

// // STAGGER THE LINKS TO APPEAR
// export const staggerText = (node1, node2, node3) => {
//   gsap.from([node1, node2, node3], {
//     duration: 0.8,
//     y: 100,
//     delay: 0.1,
//     ease: "power3.inOut",
//     stagger: {
//       amount: 0.3,
//     },
//   });
// };

// // Fade up for the additonal info on our menu
// export const fadeInUp = (node) => {
//   gsap.from(node, {
//     y: 60,
//     duration: 1,
//     delay: 0.2,
//     opacity: 0,
//     ease: "power3.inOut",
//   });
// };

// // Hover on the link
// export const handleHover = (e) => {
//   gsap.to(e.target, {
//     duration: 0.3,
//     y: 3,
//     skewX: 4,
//     ease: "power1.inOut",
//   });
// };

// // Hover off the link
// export const handleHoverExit = (e) => {
//   gsap.to(e.target, {
//     duration: 0.3,
//     y: -3,
//     skewX: 0,
//     ease: "power1.inOut",
//   });
// };

// // adds city image once you hover on
// export const handleCity = (city, target) => {
//   gsap.to(target, {
//     duration: 0,
//     background: `url(${city}) center center`,
//   });
//   gsap.to(target, {
//     duration: 0.4,
//     opacity: 1,
//     ease: "power3.inOut",
//   });
//   gsap.from(target, {
//     duration: 0.4,
//     skewY: 2,
//     transformOrigin: "right top",
//   });
// };

// // Removes the city image once you hover off
// export const handleCityReturn = (target) => {
//   gsap.to(target, {
//     duration: 0,
//     skewY: 0,
//   });
//   gsap.to(target, {
//     duration: 0.4,
//     opacity: 0,
//     skewY: 0,
//   });
// };
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

class AnimationUtils {
  static animateFrom(elem, direction) {
    direction = direction || 1;
    let x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  static hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  static initializeScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      AnimationUtils.hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: function () {
          AnimationUtils.animateFrom(elem);
        },
        onEnterBack: function () {
          AnimationUtils.animateFrom(elem, -1);
        },
        onLeave: function () {
          AnimationUtils.hide(elem);
        }, // assure that the element is hidden when scrolled into view
      });
    });
  }
}

export default AnimationUtils;
