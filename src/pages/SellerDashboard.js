import React from "react";

const SellerDashboard = () => {
  return (
    <div className="flex flex-row">
      {/* side menu */}
      <div className="w-1/5 h-full flex-flex-col bg-[#222222] space-y-12 pt-8 pl-12">
        <div>
          <img src="../assests/icons/grocerify.svg" className="w-[196px]" />
        </div>
        <div className="text-[#848484] font-Montserrat space-y-6 pl-2">
          <div className="flex flex-row hover:bg-[#FFFFFF] ">
            {" "}
            <span>
              <img src="../assests/icons/dashboard1.svg" className="w-full h-full relative" />
              <img src="../assests/icons/dashboard2.svg" className="w-[14px] absolute left-14 top-[138px]" />
            </span>
            <p className="pl-1">Dashboard</p>
          </div>
          <div className="flex flex-row">
            {" "}
            <span>
              <img src="../assests/icons/order.svg" className="w-full h-full" />
            </span>
            <p className="pl-1">Order</p>
          </div>
          <div className="flex flex-row">
            {" "}
            <span>
              <img src="../assests/icons/inventory.svg" className="w-full h-full" />
            </span>
            <p className="pl-1">Inventory</p>
          </div>
          <div className="flex flex-row">
            {" "}
            <span>
              <img src="../assests/icons/discount.svg" className="w-full h-full" />
            </span>
            <p className="pl-1">Discount & Promotions</p>
          </div>
          <div className="flex flex-row">
            {" "}
            <span>
              <img src="../assests/icons/product.svg" className="w-full h-full" />
            </span>
            <p className="pl-1">Product</p>
          </div>
          <div className="flex flex-row">
            <span>
              {" "}
              <img src="../assests/icons/analytics.svg" className="w-full h-full" />
            </span>{" "}
            <p className="pl-1">Analytics</p>
          </div>
          <div className="flex flex-row">
            <span>
              <img src="../assests/icons/settings.svg" className="w-full h-full" />
            </span>
            <p className="pl-1">Setting</p>
          </div>
        </div>
      </div>

      <div className="w-4/5">main</div>
    </div>
  );
};

export default SellerDashboard;
