const Card = () => {
  return (
    <>
      <div className="w-[798px] h-[542px] px-7 py-6 flex-col justify-end items-start gap-2.5 inline-flex bg-[url('/assets/images/house-images/house-11.png')] bg-no-repeat bg-cover bg-center">
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <div className="p-2.5 bg-white justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-[13px] font-bold font-['Inter'] uppercase tracking-[7.80px]">
                GOZO - MALTA
              </div>
            </div>
            <div className="w-[635px] text-white text-[25px] font-bold font-['Inter'] uppercase tracking-[5px]">
              FROM BLAND TO BRILLIANCE: ART-INSPIRED RENTAL REVAMP
            </div>
            <div className="w-[441px] text-white text-xs font-normal font-['Inter']">
              This revamp wasn’t just about paint and pillows; it’s about
              injecting personality, excitement, and a touch of magic into the
              property, all thanks to the power of our art-inspired design
              approach.
            </div>
          </div>
          <div className="h-[79px] px-2.5 py-5 bg-white bg-opacity-0 rounded-[50px] border border-white backdrop-blur-[20.40px] justify-center items-center gap-2.5 flex">
            <div className="w-[39px] h-[39px] relative" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
