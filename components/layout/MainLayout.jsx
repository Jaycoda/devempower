"use client";

import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

import MainHeader from "./layout-section/MainHeader";
import MainSideBar from "./layout-section/MainSideBar";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);
  return (
    <div className="bg-green-100 min-h-screen">
      <MainSideBar />
      <div className={`${open ? "max-lg:blur-lg" : "blur-0"}`}>
        <MainHeader />
        <main className="lg:ml-[280px]">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
