import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
import Link from "next/link";

import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout, SiSinglestore } from "react-icons/si";

const MainSideBar = () => {
  const { open, toggle } = useContext(MenuContext);

  const closeSideBarHandler = () => {
    toggle();
  };
  return (
    <aside
      className={`bg-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-100 ${
        open ? "w-60 p-4 block fixed" : "w-0 hidden"
      } lg:w-60 lg:p-4 z-20 shadow-lg `}
    >
      <ul>
        <li className="flex justify-end items-center lg:hidden">
          <AiOutlineClose
            onClick={closeSideBarHandler}
            className="text-red-500 hover:text-red-800 cursor-pointer"
          />
        </li>
        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <AiOutlineHome className="mr-2" />
          <Link href="/" onClick={closeSideBarHandler}>
            Home
          </Link>
        </li>

        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <GrProjects className="mr-2" />
          <h3 className="flex-1"> Projects</h3>
          <FaAngleRight />
        </li>

        <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <div className="w-full flex flex-row justify-start items-center">
            <FaCheck className="mr-2" />
            <h3 className="flex-1"> Singular</h3>
            <FaAngleRight />
          </div>
          <ul className="ml-8 mt-4">
            <li className="flex flex-row justify-center items-center gap-4">
              <SiSinglestore />
              <Link href="/singular/selectbox" onClick={closeSideBarHandler}>
                Select Box
              </Link>
            </li>
          </ul>
        </li>

        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <FaCheckDouble className="mr-2" />
          <h3 className="flex-1"> Complex</h3>
          <FaAngleRight />
        </li>

        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <SiHelpscout className="mr-2" />
          <Link href="/about" onClick={closeSideBarHandler}>
            {" "}
            About us
          </Link>
        </li>

        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <FiPhoneCall className="mr-2" />
          <Link href="/contact-us" onClick={closeSideBarHandler}>
            {" "}
            Contact us
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSideBar;
