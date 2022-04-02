import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import HeaderWebsite from "../../components/HeaderWebsite";
import Footer from "../../components/Footer";
import Blog from "../../components/blog";
type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <HeaderWebsite />
      <Outlet />
      <Blog />
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
