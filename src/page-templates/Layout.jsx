import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/page-components/Footer";
import Navbar from "../components/page-components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
