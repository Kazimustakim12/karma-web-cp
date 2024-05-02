import { useEffect, useState } from "react";
import ApprochTab from "../components/ApprochTab";
import Banner from "../components/Banner";
import PropertyList from "../components/PropertyList";
import Loader from "../components/ui/Loader";
import SmoothScrolling from "../components/ui/SmoothScroll";
import HoverExpandImages from "../components/HoverExpandImages";
import AnimationUtils from "../utils/animations";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    AnimationUtils.initializeScrollTrigger();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <SmoothScrolling>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* <Loader /> */}
            <Banner />
            <PropertyList />
            <ApprochTab />
            <HoverExpandImages />
          </>
        )}
      </>
    </SmoothScrolling>
  );
};

export default Home;
