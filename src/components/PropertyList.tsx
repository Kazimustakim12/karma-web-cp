import Card from "./ui/Card";

const PropertyList = () => {
  const PropertyListArray = [
    {
      id: 1,
      title: "Luxury Penthouse with Pool and Seaview in Ta Xbiex, Malta",
      location: "GOZO - MALTA",
      info: "Escape to the unparalleled beauty of Malta with our exclusive 3-bedroom, 2-bathroom Penthouse in the charming area of Ta' Xbiex. Indulge in a mesmerizing panorama of the sea, embracing the majestic silhouette of Valletta, right from your windows.",
      bgImg: "/assets/images/house-images/house-taxbix.webp",
    },
    {
      id: 2,
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      location: "GOZO - MALTA",
      info: "This revamp wasn't just about paint and pillows; its about  injecting personality, excitement, and a touch of magic into the property, all thanks to the power of our art-inspired design approach.",
      bgImg: "/assets/images/house-images/house-12.webp",
    },
    {
      id: 3,
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      location: "GOZO - MALTA",
      info: "This revamp wasn't just about paint and pillows; its about  injecting personality, excitement, and a touch of magic into the property, all thanks to the power of our art-inspired design approach.",
      bgImg: "/assets/images/house-images/house-13.webp",
    },
    {
      id: 4,
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      location: "GOZO - MALTA",
      info: "This revamp wasn't just about paint and pillows; its about  injecting personality, excitement, and a touch of magic into the property, all thanks to the power of our art-inspired design approach.",
      bgImg: "/assets/images/house-images/house-14.webp",
    },
    {
      id: 5,
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      location: "GOZO - MALTA",
      info: "This revamp wasn't just about paint and pillows; its about  injecting personality, excitement, and a touch of magic into the property, all thanks to the power of our art-inspired design approach.",
      bgImg: "/assets/images/house-images/house-15.webp",
    },
  ];
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

        <div id="cards_wrapper" className="propertyCard_wrapper flex gap-4">
          {PropertyListArray.map((property) => (
            <Card
              key={property.id}
              title={property.title}
              location={property.location}
              info={property.info}
              bgImg={property.bgImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
