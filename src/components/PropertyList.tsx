import React from "react";
import Card from "./ui/Card";

const PropertyList = () => {
  return (
    <section
      id="section_to-pin"
      className="grid-container full section section_to-pin four h-full left-0 flex items-center justify-start overflow-hidden"
    >
      <div
        id="section_pin"
        className="section_pin h-svh flex justify-start items-center md:pt-[120px] md:pl-[12vw] md:pb-[120px] md:pr-[12vw] pt-[30px] pl-0 pb-[60px] pr-0"
      >
        <div className="content_wrapper md:min-w-[80vw] min-w-[100vw] pr-0 text-center">
          <h1
            className="lg:text-xl font-blinker font-bold text-primary-500 text-center xl:text-2xl
            uppercase
            leading-[30.35px]
            tracking-[5px]"
          >
            Recent New Property
          </h1>
        </div>
        {/* <div id="image_wrapper_1" className="image_wrapper image_wrapper_1">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1516647768-31ff0cef8821?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=870&amp;q=80"
            alt="Lil' Image"
          />
        </div>
        <div id="image_wrapper_2" className="image_wrapper image_wrapper_2">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1516648064-ee10acfa64db?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=863&amp;q=80"
            alt="Lil' Image"
          />
        </div>
        <div id="image_wrapper_3" className="image_wrapper image_wrapper_3">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1516647072-a39e59e34b97?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=870&amp;q=80"
            alt="Lil' Image"
          />
        </div> */}
        <div id="cards_wrapper" className="propertyCard_wrapper flex gap-4">
          <Card
            title="FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP"
            location="GOZO - MALTA"
            info="This revamp wasn’t just about paint and pillows; it’s about
                injecting personality, excitement, and a touch of magic into the
                property, all thanks to the power of our art-inspired design
                approach."
          />
          <Card
            title="FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP"
            location="GOZO - MALTA"
            info="This revamp wasn’t just about paint and pillows; it’s about
                injecting personality, excitement, and a touch of magic into the
                property, all thanks to the power of our art-inspired design
                approach."
          />
          <Card
            title="FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP"
            location="GOZO - MALTA"
            info="This revamp wasn’t just about paint and pillows; it’s about
                injecting personality, excitement, and a touch of magic into the
                property, all thanks to the power of our art-inspired design
                approach."
          />
          <Card
            title="FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP"
            location="GOZO - MALTA"
            info="This revamp wasn’t just about paint and pillows; it’s about
                injecting personality, excitement, and a touch of magic into the
                property, all thanks to the power of our art-inspired design
                approach."
          />
          <Card
            title="FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP"
            location="GOZO - MALTA"
            info="This revamp wasn’t just about paint and pillows; it’s about
                injecting personality, excitement, and a touch of magic into the
                property, all thanks to the power of our art-inspired design
                approach."
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
