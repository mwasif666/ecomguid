import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ darkMode }) {
  return (
    <div className={`${darkMode ? "cs_dark" : ""}`}>
      <Header
        logoUrl={darkMode ? "/images/logo_white.png" : "/images/logo.png"}
        actionBtnText="Book a Meeting"
        actionBtnUrl="/contact"
      />
      <Outlet />
      <Footer />
    </div>
  );
}
