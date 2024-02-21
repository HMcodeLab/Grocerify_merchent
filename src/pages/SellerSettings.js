import React, { useState } from "react";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";


const SellerSettings = () => {
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

        {/* description */}
        <div className="font-Gorditas text-[#333333] space-y-1">
          <p className="text-3xl font-Gorditas">Settings</p>
          <p className="font-Plus Jakarta Sans text-[#909090]">
            View settings and manage them.
          </p>
        </div>

        {/* details */}
        <div className="flex flex-col gap-6 pr-40">
          {/* 1 */}
          <div className="flex flex-col gap-6 shadow-md rounded-xl p-6">
            <div className="font-Montserrat-700 font-bold text-[24px] text-[#333333]">
              Account
            </div>
            <Link to={"/sellersettingsprofile"}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between gap-6">
                  <img src="../assests/icons/profiledetails.svg" />
                  <div className="flex flex-col font-Plus Jakarta Sans">
                    <p className="text-[18px] text-[#333333] font-semibold">
                      Profile Details
                    </p>
                    <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                      Name, E-Mail, phone number & address
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src="../assests/icons/forwardarrow.svg"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </Link>

            <Link to={"/sellersettingsshop"}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between gap-6">
                  <img src="../assests/icons/shopdetails.svg" />
                  <div className="flex flex-col font-Plus Jakarta Sans">
                    <p className="text-[18px] text-[#333333] font-semibold">
                      Shop Details
                    </p>
                    <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                      Shop Address, Shop Categories, etc.,
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src="../assests/icons/forwardarrow.svg"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </Link>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/Walletdetails.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    My Wallet
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    Shop Address, Shop Categories, etc.,
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../assests/icons/forwardarrow.svg"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/earnrefer.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    Refer & Earn
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    Earn money through referrals
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../assests/icons/forwardarrow.svg"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/rateus.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    Rate us{" "}
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    How did you like using the website
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../assests/icons/forwardarrow.svg"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/aboutpeople.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    About Gastos
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    About us, Privacy Policy, etc,.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../assests/icons/forwardarrow.svg"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/help.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    Help & Support
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    Make greivance regarding an issue.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../assests/icons/forwardarrow.svg"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerSettings;
