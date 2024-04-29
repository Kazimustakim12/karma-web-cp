import { useEffect } from "react";
import SmoothScrolling from "../components/ui/SmoothScroll";
import BannerIntro from "../components/ui/BannerIntro";
import FullWidthImage from "../components/ui/FullWidthImage";
import AnimationUtils from "../utils/animations";

const PropertyManagement = () => {
  useEffect(() => {
    AnimationUtils.initializeScrollTrigger();
  }, []);
  return (
    <SmoothScrolling>
      <BannerIntro
        introBannerHeadline="PROPERTY MANAGEMENT"
        introBannerSubHeadline={
          <>
            <p>
              After a series of prestigious mergers and acquisitions,
              <span className="font-bold"> Karma Real State </span>has ascended
              as a distinguished partner of the esteemed Alliance Real Estate
              Group. This union has seamlessly unified our property management
              portfolio, elevating our services to an unparalleled level of
              refinement and sophistication in Malta.
            </p>
          </>
        }
      />
      <FullWidthImage imgUrl="/assets/images/property-management.jpg" />
      <section className="bg-primary-500 py-[50px] ">
        <div className=" max-w-[1024px] w-full m-auto p-3 ">
          <p className="text-text-black text-[15px] font-normal font-['Inter'] leading-[25px]">
            Embarking on a journey of opulence and refinement,{" "}
            <span className="font-bold">Karma Real State</span> has seamlessly
            aligned itself with the esteemed Alliance Real Estate Group through
            a series of illustrious mergers and acquisitions. This strategic
            metamorphosis not only solidifies the group's property management
            portfolio but also heralds a new era of unparalleled luxury and
            sophistication in Malta's real estate realm.
          </p>
          <br />
          <p className="text-text-black text-[15px] font-normal font-['Inter'] leading-[25px]">
            Preserving its prestigious{" "}
            <span className="font-bold">Karma Real State</span> brand, the
            company now operates under the visionary stewardship of Cecil
            McCarthy, a distinguished luminary in the field with a storied
            legacy through his revered ventures, Island Properties, and Rooms
            Malta.
          </p>

          <br />
          <div className="max-w-[90%] m-auto  ">
            <ul className="list-disc px-5 ">
              <li className="list-disc text-text-black mb-4">
                With the fusion of Karma Real State, Island Properties, and
                Rooms Malta, the Alliance Real Estate Group now commands an
                exclusive portfolio of nearly 200 properties, each exuding an
                aura of refinement and exclusivity.
              </li>
              <li className="list-disc text-text-black mb-4">
                "Under Cecil McCarthy's guidance, leveraging his unrivaled
                expertise, we are dedicated to elevating this venture,
                perfecting our offerings, and consistently delivering
                unparalleled services to our esteemed clientele at Alliance Real
                Estate," remarked Michael Bonello, CEO of Alliance.
              </li>
              <li className="list-disc text-text-black mb-4">
                Operating on a cutting-edge platform adorned with a cloud-based
                booking system, sophisticated accounting tools, and an
                impeccably curated maintenance planner, Karma Real State
                epitomizes seamless integration within Alliance's esteemed real
                estate universe.
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap p-2 gap-6 xl:pb-[100px] lg:pb-[60px]">
            <div className="mt-[50px] p-[15px] md:p-[20px] xl:p-[50px] border border-black text-center flex flex-col gap-5 md:w-[48%]  items-center justify-center gs_reveal gs_reveal_fromLeft">
              <p className="text-[15px] text-text-black leading-[25px] font-normal">
                McCarthy echoed these sentiments, exuding confidence in the
                partnership's promise: "By fortifying our market presence
                through this synergy, we stand poised to meet the escalating
                demand for bespoke property management services, locally and
                internationally. Our commitment remains unwavering – to provide
                an extraordinary level of service that transcends ordinary
                expectations."
              </p>
            </div>
            <div className="mt-[50px] p-[15px] md:p-[20px] xl:p-[50px]  border border-black text-center flex flex-col gap-5 md:w-[48%]  items-center justify-center gs_reveal gs_reveal_fromRight">
              <p className="text-[15px] text-text-black leading-[25px] font-normal">
                Operating on a cutting-edge platform adorned with a cloud-based
                booking system, sophisticated accounting tools, and an
                impeccably curated maintenance planner, Karma Real State
                epitomizes seamless integration within Alliance's esteemed real
                estate universe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SmoothScrolling>
  );
};

export default PropertyManagement;
