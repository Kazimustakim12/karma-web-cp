import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import Menu from "./Menu";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-text-black relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
