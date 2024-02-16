import React from 'react'
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";

const SellerDiscount = () => {
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
        <p className="text-3xl">My Discount</p>
        <p>List of discount provided to Customer</p>
      </div>

      
      <div>recent order</div>
    </div>
  </div>
  )
}

export default SellerDiscount