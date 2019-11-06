import React, { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

const Layout: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
};

export default Layout;
