import { ReactNode } from "react";

const BannerIntro = ({
  introBannerHeadline,
  introBannerSubHeadline,
}: {
  introBannerHeadline: string;
  introBannerSubHeadline: ReactNode;
}) => {
  return (
    <>
      <div className="w-full  flex-col justify-center items-center gap-7 inline-flex gs_reveal py-[75px] p-4">
        <div className="max-w-[608px] w-full pb-10 border-b border-primary-500 justify-center items-start gap-2.5 inline-flex">
          <div className="text-center text-primary-500 sm:text-[25px] text-[20px] font-bold font-['Inter'] uppercase leading-[30.35px] tracking-[5px]">
            {introBannerHeadline}
          </div>
        </div>
        <div className="max-w-[799px] w-full text-center text-primary-500 text-[15px] font-normal font-['Inter'] leading-[25px]">
          {introBannerSubHeadline}
        </div>
      </div>
    </>
  );
};

export default BannerIntro;
