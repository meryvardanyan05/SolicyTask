import React from "react";
import "./Layout.css";
import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";

const Layout = () => {
  return (
    <div className='Layout'>
      <div className='Layout_left'>
        <Header />
        <Main />

        <Footer />
      </div>
      <Aside />
    </div>
  );
};

export default Layout;
