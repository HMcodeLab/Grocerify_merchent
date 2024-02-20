import React from "react";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";


// cards navigation - sales, visitors
// table navigation- due, active ...


const SellerDashboard = () => {
  return (
    <div className="flex flex-row h-auto">
      {/* side menu */}
      <SideMenuSeller />

      {/* Main content */}
      <div className="w-4/5 flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10">
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="font-Gorditas text-[#333333] space-y-1">
          <p className="text-3xl font-Gorditas">Hello Seller</p>
          <p className="font-Gorditas">Today is Monday 23rd January 2024</p>
        </div>

        {/* data cards */}
        <div className="grid grid-cols-4 gap-14">
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
                <div className="font-Montserrat space-y-1">
                    <p className="text-[#333333] text-xl">Total Sales</p>
                    <p className="text-[#58B310] text-xl">$2478</p>
                    <p className="text-[#FFB800] text-xs font-semibold pt-1">27% last week</p>
                </div>
                <div>
                    <img src="../assests/icons/Sales.svg" />
                </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
                <div className="font-Montserrat space-y-1">
                    <p className="text-[#333333] text-xl">Visitors</p>
                    <p className="text-[#58B310] text-xl">$2478</p>
                    <p className="text-[#FFB800] text-xs font-semibold pt-1">27% last week</p>
                </div>
                <div>
                    <img src="../assests/icons/visitors.svg" />
                </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
                <div className="font-Montserrat space-y-1">
                    <p className="text-[#333333] text-xl">New Orders</p>
                    <p className="text-[#58B310] text-xl">$2478</p>
                    <p className="text-[#FFB800] text-xs font-semibold pt-1">27% last week</p>
                </div>
                <div>
                    <img src="../assests/icons/received.svg" />
                </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
                <div className="font-Montserrat space-y-1">
                    <p className="text-[#333333] text-xl">Customers</p>
                    <p className="text-[#58B310] text-xl">$2478</p>
                    <p className="text-[#FFB800] text-xs font-semibold pt-1">27% last week</p>
                </div>
                <div>
                    <img src="../assests/icons/target.svg" />
                </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
                <div className="font-Montserrat space-y-1">
                    <p className="text-[#333333] text-xl">Total Earning</p>
                    <p className="text-[#58B310] text-xl">$2478</p>
                    <p className="text-[#FFB800] text-xs font-semibold pt-1">27% last week</p>
                </div>
                <div>
                    <img src="../assests/icons/Salary.svg" />
                </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
                <div className="font-Montserrat space-y-1">
                    <p className="text-[#333333] text-xl">Delivered Order</p>
                    <p className="text-[#58B310] text-xl">$2478</p>
                    <p className="text-[#FFB800] text-xs font-semibold pt-1">27% last week</p>
                </div>
                <div>
                    <img src="../assests/icons/Courier.svg" />
                </div>
            </div>
        </div>

        {/* Products */}
        <div className="flex flex-row gap-4 font-Montserrat pt-4">
            <button className=" text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310]">Due</button>
            <button className=" text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310]">Active</button>
            <button className=" text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310]">Delivered</button>
            <button className=" text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310]">On the way</button>
        </div>
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-4">
                <p className="w-2/6">Products</p>
                <p className="w-1/6">Category</p>
                <p className="w-1/6">Price</p>
                <p className="w-1/6">Status</p>
            </div>
            <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pt-4 pb-2 pl-4">
                <div className="w-2/6 font-Gorditas flex flex-row"><img src="../assests/images/facewash.svg" />Innis free Face wash  25 gm</div>
                <div className="w-1/6 font-Gorditas">Beauty</div>
                <div className="w-1/6 font-Gorditas">$199</div>
                <div className="w-1/6 font-Gorditas">Pending</div>
            </div>
            <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pt-4 pb-2 pl-4">
                <div className="w-2/6 font-Gorditas flex flex-row"><img src="../assests/images/facewash.svg" />Innis free Face wash  25 gm</div>
                <div className="w-1/6 font-Gorditas">Beauty</div>
                <div className="w-1/6 font-Gorditas">$199</div>
                <div className="w-1/6 font-Gorditas">Pending</div>
            </div>
            <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pt-4 pb-2 pl-4">
                <div className="w-2/6 font-Gorditas flex flex-row"><img src="../assests/images/facewash.svg" />Innis free Face wash  25 gm</div>
                <div className="w-1/6 font-Gorditas">Beauty</div>
                <div className="w-1/6 font-Gorditas">$199</div>
                <div className="w-1/6 font-Gorditas">Pending</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
