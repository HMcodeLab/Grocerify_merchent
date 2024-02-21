import React, { useState } from "react";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";

// graph data


const SellerAnalyticEarning = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };

  return (
    <div className="flex flex-row h-auto">
      {/* side menu */}
     <button
        onClick={toggleSidebar}
        className="absolute text-[#58B310] p-2 ml-2 mt-6 rounded-md"
        style={{ height: "30px" }}
      >
        
        <Menu size={30} />
      </button>
      <SideMenuSeller isOpen={isSidebarOpen} />

      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10 ${
          isSidebarOpen ? "w-4/5" : "w-full"
        }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* cards */}
        <div className="grid grid-cols-4 gap-10">
          <Link to={"/selleranalytics"}>
            <div className="flex flex-col justify-between shadow-md rounded-lg h-full pt-4 pb-6 pl-4 pr-2 cursor-pointer">
              <div className="flex flex-row justify-between font-Montserrat ">
                <div className="text-[#333333] font-Montserrat ">
                  Total Sales
                </div>
                <div className="text-[#58B310] font-Montserrat">+6.5%</div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="font-Montserrat text-[#000000]">
                  1,23,434.00
                </div>
                <div className="ml-auto">
                  <img src="../assests/images/sale1.svg" />
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/selleranalyticrevenue"}>
            <div className="flex flex-col justify-between shadow-md rounded-lg h-full pt-4 pb-6 pl-4 pr-2 cursor-pointer">
              <div className="flex flex-row justify-between font-Montserrat ">
                <div className="text-[#333333] font-Montserrat ">
                  Total Revenue
                </div>
                <div className="text-[#E70000] font-Montserrat">-1.5%</div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="font-Montserrat text-[#000000]">5796</div>
                <div className="ml-auto">
                  <img src="../assests/images/sale2.svg" />
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/selleranalyticorder"}>
            <div className="flex flex-col justify-between shadow-md rounded-lg h-full pt-4 pb-6 pl-4 pr-2 cursor-pointer">
              <div className="flex flex-row justify-between font-Montserrat ">
                <div className="text-[#333333] font-Montserrat ">
                  Order Complete
                </div>
                <div className="text-[#FFB800] font-Montserrat">+1.5%</div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="font-Montserrat text-[#000000]">3444</div>
                <div className="ml-auto">
                  <img src="../assests/images/sale3.svg" />
                </div>
              </div>
            </div>
          </Link>

          <div className="flex flex-col justify-between shadow-md rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="flex flex-row justify-between font-Montserrat ">
              <div className="text-[#333333] font-Montserrat ">
                Total Earning
              </div>
              <div className="text-[#008080] font-Montserrat">+1.5%</div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="font-Montserrat text-[#000000]">14523,434.00</div>
              <div className="ml-auto">
                <img src="../assests/images/sale4.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* Data */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <img src="../assests/images/graph4.png" />
            </div>
            <div className="flex flex-row justify-between pl-2 pr-4 h-[128px]">
              <div className="flex flex-col text-[#333333] text-Inter gap-2 justify-between p-4">
                <div className="text-[16px] font-semibold">Top Month</div>
                <div className="flex flex-col">
                  <p className="text-[24px] font-bold">November</p>
                  <p className="text-[#008080] text-[16px]">2019</p>
                </div>
              </div>
              <div className="flex flex-col text-[#333333] text-Inter gap-2 justify-between p-4">
                <div className="text-[16px] font-semibold">Top year</div>
                <div className="flex flex-col">
                  <p className="text-[24px] font-bold">2023</p>
                  <p className="text-[14px]">96K sold so far</p>
                </div>
              </div>
              <div className="flex flex-col text-[#333333] text-Inter gap-2 justify-between p-4">
                <div className="text-[16px] font-semibold">Top buyer</div>
                <div className="flex flex-col gap-1  items-left">
                  <img
                    src="../assests/icons/analyticuser.svg"
                    className="h-[24px] w-[24px]"
                  />
                  <p className="text-[12px] font-bold">Maggie Johnson</p>
                  <p className="text-[10px]">Oasis Organic Inc.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[#333333] font-Montserrat-600 text-[20px]">
              Top Products
            </div>
            <div className="flex flex-col gap-2">
              <img src="../assests/images/Bar.svg" />
              <img src="../assests/images/Bar.svg" />
              <img src="../assests/images/Bar.svg" />
              <img src="../assests/images/Bar.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerAnalyticEarning;
