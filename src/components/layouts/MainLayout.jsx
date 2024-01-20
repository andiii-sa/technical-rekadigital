import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex gap-2 h-screen">
      <Sidebar className="flex-none" />
      <div className="w-full p-6 ml-[200px] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
