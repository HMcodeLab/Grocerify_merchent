import React from "react";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";


// add edit icon in search bar for shop details only
// edit on same page to update data


const SellerSettingsShop = () => {
  return (
    <div className="flex flex-row h-auto">
      {/* side menu */}
      <SideMenuSeller />

      {/* Main content */}
      <div className="w-4/5 flex flex-col pl-20 pr-16 pt-8 pb-40 space-y-10">
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="font-Gorditas text-[#333333] space-y-1">
          <p className="text-[24px] font-Gorditas">Shop Details</p>
          <p className="font-Plus Jakarta Sans text-[#909090] ">
            Here you can view and edit your details.
          </p>
        </div>

        {/* images */}
        <div>
          <img
            src="../assests/images/shopdetails.png"
            className="w-[688px] h-[287px] rounded-lg"
          />
        </div>

        <div className="flex flex-row gap-10">
          <img
            src="../assests/images/shopdetails2.png"
            className="w-[158px] h-[113px] rounded-lg"
          />
          <div className="flex flex-col p-2 w-[500px] gap-1">
            <p className="font-Gorditas font-bold text-[14px] text-[#333333]">
              Edit Profile Image
            </p>
            <p className="text-[#B1BCD2] text-[14px] font-Plus Jakarta Sans leading-4">
              Browse your Gallery or take a Picture from the phone Camera to
              upload
            </p>
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col gap-8 w-[700px]">
          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/shopdetails.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                    The Grocrify
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                    Shop Name
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="font-Montserrat-700 font-bold text-[24px] text-[#333333]">
              Additional Details
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/location2.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                  32-B cannought Place
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                  Address
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/location3.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                  New Delhi
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                  State
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/location3.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                  Central Delhi
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                  City
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="font-Montserrat-700 font-bold text-[24px] text-[#333333]">
            Service Details
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/service.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                  Delivery, Dining, WIFI etc.,
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                  Shop Services
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 shadow-md rounded-xl pl-6 pr-6 pt-3 pb-3">
            <div className="font-Montserrat-700 font-bold text-[24px] text-[#333333]">
            Shop Photos
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between gap-6">
                <img src="../assests/icons/service.svg" />
                <div className="flex flex-col font-Plus Jakarta Sans">
                  <p className="text-[18px] text-[#333333] font-semibold">
                  Add Media/Photos
                  </p>
                  <p className="text-[#979797] font-Plus Jakarta Sans text-[14px]">
                  Add Media/Photos
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SellerSettingsShop;
