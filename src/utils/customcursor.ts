import React, { useEffect } from "react";

interface CursorOptions {
  cursor: string;
  dot: string;
  links?: string;
  buttons?: string;
  images?: string;
}

const CustomCursor: React.FC<CursorOptions> = ({
  cursor = ".v-cursor",
  dot = ".v-dot",
  links = "c-link",
  buttons = "c-btn",
  images = "c-img",
}) => {
  useEffect(() => {
    const handleMouseOver = () => {
      cursorEl.style.opacity = "1";
      dotEl.style.opacity = "1";
    };

    const handleMouseMove = (e: MouseEvent) => {
      const X = e.x,
        Y = e.y,
        rect = cursorEl.getBoundingClientRect(),
        rectd = dotEl.getBoundingClientRect();
      cursorEl.style.top = Y + "px";
      cursorEl.style.left = X + "px";

      dotEl.style.top = Y + "px";
      dotEl.style.left = X + "px";
    };

    const handleMouseOut = () => {
      cursorEl.style.opacity = "0";
      dotEl.style.opacity = "0";
    };

    const handleMouseDown = () => {
      cursorEl.style.transform = "translate(-50%, -50%) scale(0.7)";
    };

    const handleMouseUp = () => {
      cursorEl.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const makeLink = () => {
      cursorEl.classList.add("link");
      dotEl.classList.add("link");
    };

    const makeBtn = () => {
      cursorEl.classList.add("button");
      dotEl.classList.add("button");
    };

    const makeImg = () => {
      cursorEl.classList.add("img");
      dotEl.classList.add("img");
    };

    const reset = () => {
      cursorEl.classList.remove("link", "button", "img");
      dotEl.classList.remove("link", "button", "img");
    };

    const cursorEl = document.querySelector<HTMLElement>(cursor)!;
    const dotEl = document.querySelector<HTMLElement>(dot)!;

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    if (links) {
      const arr = document.querySelectorAll<HTMLElement>(`.${links}`);
      arr.forEach((el) => {
        el.addEventListener("mouseover", makeLink);
        el.addEventListener("mouseout", reset);
      });
    }

    if (buttons) {
      const arr = document.querySelectorAll<HTMLElement>(`.${buttons}`);
      arr.forEach((el) => {
        el.addEventListener("mouseover", makeBtn);
        el.addEventListener("mouseout", reset);
      });
    }

    if (images) {
      const arr = document.querySelectorAll<HTMLElement>(`.${images}`);
      arr.forEach((el) => {
        el.addEventListener("mouseover", makeImg);
        el.addEventListener("mouseout", reset);
      });
    }

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return null; // Since it's a utility component, it doesn't render anything
};

export default CustomCursor;
