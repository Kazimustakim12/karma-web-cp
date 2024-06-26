import { Link } from "react-router-dom";
import { RightArrow } from "./ui/IconsSVg";

const HoverExpandImages = () => {
  const PropertyListArray = [
    {
      id: "1",
      image: "/assets/images/house-images/house-11.webp",
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      url: "https://holidaysinmalta.eu/",
    },
    {
      id: "2",
      image: "/assets/images/house-images/house-12.webp",
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      url: "https://holidaysinmalta.eu/",
    },
    {
      id: "3",
      image: "/assets/images/house-images/house-13.webp",
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      url: "https://holidaysinmalta.eu/",
    },
    {
      id: "4",
      image: "/assets/images/house-images/house-14.webp",
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      url: "https://holidaysinmalta.eu/",
    },
    {
      id: "5",
      image: "/assets/images/house-images/house-15.webp",
      title: "FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP",
      url: "https://holidaysinmalta.eu/",
    },
  ];
  return (
    <>
      <div className="w-full h-[500px]  justify-center items-center flex overflow-hidden transition-all duration-700">
        {PropertyListArray.map((item, index) => {
          return (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
              className={` ${
                index > 2 ? "hidden sm:flex " : ""
              }c-img justify-start  items-end p-4 h-full sm:p-8 gap-2.5 flex  bg-cover group bg-center bg-no-repeat flex-1  transition-all md:hover:flex-[7] hover:flex-[100%] duration-700]`}
            >
              <Link
                to={item.url}
                className=" justify-start  md:flex-row flex-col-reverse  gap-2.5  opacity-0 transition-all group-hover:delay-700 hidden group-hover:opacity-100 delay-700 group-hover:flex md:items-center items-baseline"
              >
                <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                  <div className="max-w-[635px] text-white xl:text-[25px] lg:text-[20px] sm:text-[18px] text-[15px] font-bold font-['Inter'] uppercase tracking-[5px]">
                    {item.title}
                  </div>
                </div>
                <div className="lg:h-[60px] lg:w-[90px] w-[60px] h-[40px] px-2.5 py-5 bg-white group-hover:bg-white bg-opacity-0 rounded-[50px] border border-white backdrop-blur-[20.40px] justify-center items-center gap-2.5 flex">
                  <div className="w-[39px] h-[39px] relative flex justify-center">
                    <RightArrow className="fill-white group-hover:fill-text-black md:w-auto w-[20px]" />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HoverExpandImages;
