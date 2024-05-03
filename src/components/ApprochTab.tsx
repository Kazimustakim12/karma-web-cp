import { CustomTabs } from "./ui/CustomTabs";

const ApprochTab = () => {
  const ApprochTab = [
    {
      label: "Welcome Karma",
      value: "welcomekarma",
      imgSrc: "/assets/images/Welcome.webp",
      desc: `Welcome to Karma Real Estates, where the art of finding your perfect property meets unparalleled expertise and personalized service. As you embark on your real estate journey with us, expect nothing less than a seamless experience guided by our seasoned professionals. Our extensive listings showcase a diverse range of properties, from exquisite luxury estates to cozy family homes and lucrative investment opportunities. Each listing is meticulously curated to offer you a glimpse into the unique charm and potential of every property. Whether you seek a serene countryside retreat, a bustling urban sanctuary, or a thriving commercial space, Karma Real Estates is dedicated to helping you find the ideal match. With a deep understanding of local markets and a commitment to excellence, we go above and beyond to ensure that every client finds their perfect place to call home or invest. Welcome to Karma Real Estates, where your property aspirations are our top priority.`,
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
      imgSrc: "/assets/images/who_we_are.webp",
      desc: `At Karma Real Estates, we're more than just a real estate agency; we're your partners in property success. With years of industry experience and a deep understanding of local markets, we offer personalized guidance tailored to your unique needs. Our dedicated team of professionals is committed to providing exceptional service and expert advice at every step of your real estate journey. From first-time buyers to seasoned investors, we prioritize your satisfaction above all else. With transparency, integrity, and a results-driven approach, we strive to exceed your expectations and earn your trust. Welcome to Karma Real Estates, where your property goals become our shared mission.`,
    },
    // {
    //   label: "Welcome Karma",
    //   value: "welcomekarma",
    //   imgSrc: "https://via.placeholder.com/686x311",
    // },
    // {
    //   label: "OUR APPROACH",
    //   value: "ourApproach",
    //   imgSrc: "/assets/images/tab-approach.png",
    //   desc: `With extensive financial expertise, 14 years of real estate experience, and strong IT knowledge, we offer exceptional value that sets us apart. Our comprehensive services include financial forecasting, revenue analysis, and insightful guidance. But we don't stop there. We also provide turnkey services to ensure your properties are always in optimal condition. From maintenance to improvements, we handle every aspect with care. Our goal is to exceed your expectations, covering Malta, Gozo, and Sicily. Entrust Casa Rooms for unparalleled service and superior results today!.`,
    // },
    // {
    //   label: "who we are",
    //   value: "whoWeAre",
    //   imgSrc: "https://via.placeholder.com/686x311",
    // },
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
