import { CustomTabs } from "./ui/CustomTabs";

const ApprochTab = () => {
  const ApprochTab = [
    {
      label: "Welcome Karma",
      value: "welcomekarma",
      imgSrc: "https://via.placeholder.com/686x311",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "OUR APPROACH",
      value: "ourApproach",
      imgSrc: "/assets/images/tab-approach.webp",
      desc: `With extensive financial expertise, 14 years of real estate experience, and strong IT knowledge, we offer exceptional value that sets us apart. Our comprehensive services include financial forecasting, revenue analysis, and insightful guidance. But we don't stop there. We also provide turnkey services to ensure your properties are always in optimal condition. From maintenance to improvements, we handle every aspect with care. Our goal is to exceed your expectations, covering Malta, Gozo, and Sicily. Entrust Casa Rooms for unparalleled service and superior results today!.`,
    },
    {
      label: "who we are",
      value: "whoWeAre",
      imgSrc: "https://via.placeholder.com/686x311",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
    },
  ];

  return (
    <>
      <div className=" flex justify-center items-center  bg-primary-500 py-[120px]">
        <div className=" max-w-[726px] w-full  flex-col justify-center items-center gap-[35px] inline-flex">
          <CustomTabs tabListArray={ApprochTab} activeTabName={"ourApproach"} />
        </div>
      </div>
    </>
  );
};

export default ApprochTab;
