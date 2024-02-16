import React from "react";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";

const SellerOrder = () => {
  return (
    <div className="flex flex-row">
      {/* side menu */}
      <SideMenuSeller />

      {/* Main content */}
      <div className="w-4/5 flex flex-col pl-20 pr-16 pt-8 space-y-10">
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="font-Gorditas text-[#333333] space-y-1">
          <p className="text-3xl">Hello Seller</p>
          <p>Today is Monday 23rd January 2024</p>
        </div>

        {/* data cards */}
        <div className="grid grid-cols-4 gap-14">
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Total Sales</p>
              <p className="text-[#58B310] text-xl">$2478</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
            <div>
              <img src="../assests/icons/Sales.svg" />
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Visitors</p>
              <p className="text-[#58B310] text-xl">$2478</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
            <div>
              <img src="../assests/icons/visitors.svg" />
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">New Orders</p>
              <p className="text-[#58B310] text-xl">$2478</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
            <div>
              <img src="../assests/icons/received.svg" />
            </div>
          </div>
          <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
            <div className="font-Montserrat space-y-1">
              <p className="text-[#333333] text-xl">Customers</p>
              <p className="text-[#58B310] text-xl">$2478</p>
              <p className="text-[#FFB800] text-xs font-semibold pt-1">
                27% last week
              </p>
            </div>
            <div>
              <img src="../assests/icons/target.svg" />
            </div>
          </div>
        </div>
        <div>recent order</div>
      </div>
    </div>
  );
};

export default SellerOrder;
