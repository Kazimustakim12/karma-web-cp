import { RightArrow } from "./IconsSVg";

const Card = ({
  title,
  info,
  location,
  bgImg,
}: {
  title: string;
  info: string;
  location: string;
  bgImg: string;
}) => {
  return (
    <>
      <a
        href="https://holidaysinmalta.eu/"
        target="_blank"
        className="group cursor-pointer "
      >
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="xl:min-w-[798px] md:w-[580px] w-[420px] h-[380px]  xl:h-[526px] lg:h-[480px] min-h-full md:px-7 md:py-6 px-3 py-3 flex-col justify-end items-start gap-2.5 inline-flex bg-no-repeat bg-cover bg-center"
        >
          <div className="justify-start items-center gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="p-2.5 bg-white justify-center items-center gap-2.5 inline-flex">
                <div className="text-black md:text-[13px] text-[8px] font-bold font-['Inter'] uppercase tracking-[7.80px]">
                  {location}
                </div>
              </div>
              <div className="max-w-[635px] text-white xl:text-[25px] md:text-[20px] text-[16px] font-bold font-['Inter'] uppercase tracking-[5px]">
                {title}
              </div>
              <div className="max-w-[441px] text-white text-xs font-normal font-['Inter']">
                {info}
              </div>
            </div>
            <div className="md:h-[60px] md:w-[90px] w-[40px] h-[40px] px-2.5 py-5 bg-white bg-opacity-0 rounded-[50px] border group-hover:bg-white border-white backdrop-blur-[20.40px] justify-center items-center gap-2.5 flex">
              <div className="lg:w-[39px] lg:h-[39px] relative">
                <RightArrow className="fill-white group-hover:fill-black md:w-auto w-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
