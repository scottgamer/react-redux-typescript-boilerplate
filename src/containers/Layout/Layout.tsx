import React, { Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

const Layout: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
};

export default Layout;
