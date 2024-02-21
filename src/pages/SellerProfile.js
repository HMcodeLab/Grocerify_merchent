import React, { useState } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";


// manipulate data
// upload profile pic


const SellerProfile = () => {
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
          <p className="text-3xl font-Gorditas">Merchant Profile</p>
        </div>

        <div className='flex flex-row justify-between'>

            <div className='flex flex-col font-Plus Jakarta Sans gap-6 pl-8'>
                <div className='flex flex-row gap-3'>
                    <img src='../assests/icons/user-seller.svg' className='w-[32px] h-auto' />
                    <div className='flex flex-col'>
                        <p className='text-[#333333] font-semibold text-[18px]'>Rahul Grewal</p>
                        <p className='text-[#979797] text-[14px]'>Owner Name</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src='../assests/icons/call-calling.svg' className='w-[32px] h-auto' />
                    <div className='flex flex-col'>
                        <p className='text-[#333333] font-semibold text-[18px]'>578757757239</p>
                        <p className='text-[#979797] text-[14px]'>Phone Number</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src='../assests/icons/sms-tracking.svg' className='w-[32px] h-auto' />
                    <div className='flex flex-col'>
                        <p className='text-[#333333] font-semibold text-[18px]'>rahulgrewal786@gmail.com</p>
                        <p className='text-[#979797] text-[14px]'>E-Mail Address</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src='../assests/icons/calendar.svg' className='w-[32px] h-auto' />
                    <div className='flex flex-col'>
                        <p className='text-[#333333] font-semibold text-[18px]'>06 November 1998</p>
                        <p className='text-[#979797] text-[14px]'>Birth Date</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src='../assests/icons/pin.svg' className='w-[32px] h-auto' />
                    <div className='flex flex-col'>
                        <p className='text-[#333333] font-semibold text-[18px]'>242 B,Sector 71,Mohalli</p>
                        <p className='text-[#979797] text-[14px]'>Address</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src='../assests/icons/adhaar.svg' className='w-[32px] h-auto' />
                    <div className='flex flex-col'>
                        <p className='text-[#333333] font-semibold text-[18px]'>4545  5776  6778</p>
                        <p className='text-[#979797] text-[14px]'>Adhar Number</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src='../assests/icons/pancard.svg' className='w-[32px] h-auto' />
                    <div className='flex flex-col'>
                        <p className='text-[#333333] font-semibold text-[18px]'>4545  5776  6778</p>
                        <p className='text-[#979797] text-[14px]'>PAN Card</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src='../assests/icons/storename.svg' className='w-[32px] h-auto' />
                    <div className='flex flex-col'>
                        <p className='text-[#333333] font-semibold text-[18px]'>24 X 7 Store</p>
                        <p className='text-[#979797] text-[14px]'>Store Name</p>
                    </div>
                </div>
            </div>

            <div className='pr-32 pt-10 relative'>
                <img src='../assests/images/sellerpic.png' className='' />
                <div className='bg-white w-[60px] h-[60px] absolute top-52 right-40 rounded-full shadow-md'>
                    <img src='../assests/icons/camera.svg' className='absolute top-4 left-4 w-auto h-auto' />
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default SellerProfile