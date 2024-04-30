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
