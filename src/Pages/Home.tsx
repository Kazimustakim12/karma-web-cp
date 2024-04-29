import { useEffect, useState } from "react";
import ApprochTab from "../components/ApprochTab";
import Banner from "../components/Banner";
import PropertyList from "../components/PropertyList";
import Card from "../components/ui/Card";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import Loader from "../components/ui/Loader";
import Navbar from "../components/ui/Navbar";
import SmoothScrolling from "../components/ui/SmoothScroll";
import HoverExpandImages from "../components/HoverExpandImages";
import AnimationUtils from "../utils/animations";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    AnimationUtils.initializeScrollTrigger();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount
  console.log("================================", isLoading);
  return (
    <SmoothScrolling>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
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
