import React from "react";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../../components/FooterAdmin";
import HeaderAdmin from "../../components/HeaderAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/sb-admin-2.min.css";
import "../../vendor/fontawesome-free/css/all.min.css";
import "../../vendor/jquery/jquery.min.js";
import "../../vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../../vendor/jquery-easing/jquery.easing.min.js";
import "../../js/sb-admin-2.min.js";
import "../../vendor/chart.js/Chart.min.js";
type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div>
      <HeaderAdmin />

      <Outlet />
    </div>
  );
};

export default AdminLayout;
