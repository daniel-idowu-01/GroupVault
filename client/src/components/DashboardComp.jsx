import React from "react";
import DashboardSideNav from "./DashboardSideNav";
import DashboardMain from "./DashboardMain";

const DashboardComp = () => {
  return (
    <div className="flex">
      <DashboardSideNav />
      <DashboardMain />
    </div>
  );
};

export default DashboardComp;
