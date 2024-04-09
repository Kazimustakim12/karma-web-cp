import Banner from "../components/Banner";
import PropertyList from "../components/PropertyList";
import Card from "../components/ui/Card";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import Navbar from "../components/ui/Navbar";
import SmoothScrolling from "../components/ui/SmoothScroll";

const Home = () => {
  return (
    <SmoothScrolling>
      <Layout>
        <Banner />
        <PropertyList />
      </Layout>
    </SmoothScrolling>
  );
};

export default Home;
