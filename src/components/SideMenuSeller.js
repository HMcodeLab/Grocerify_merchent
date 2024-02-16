import React from "react";
import { Link } from "react-router-dom";

const SideMenuSeller = () => {
  return (
    <div className="w-1/5 h-full flex-flex-col bg-[#222222] space-y-12 pr-1 pt-8 pl-12 pb-2">
      <div>
        <img src="../assests/icons/grocerify.svg" className="w-[196px]" />
      </div>

      <div className="text-[#848484] font-Montserrat space-y-6 pl-2">
        <Link to={"/sellerdashboard"}>
          <div
            className="flex flex-row hover:bg-[#FFFFFF]  pt-2 pb-2 pl-2 mb-2"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            {" "}
            <span>
              <img
                src="../assests/icons/dashboard1.svg"
                className="w-full h-full relative"
              />
              <img
                src="../assests/icons/dashboard2.svg"
                className="w-[14px] absolute left-16 top-[145px]"
              />
            </span>
            <p className="pl-1">Dashboard</p>
          </div>
        </Link>

        <Link to={"/sellerorder"}>
          <div
            className="flex flex-row hover:bg-[#FFFFFF] pt-2 pb-2 pl-2 mb-2"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            {" "}
            <span>
              <img src="../assests/icons/order.svg" className="w-full h-full" />
            </span>
            <p className="pl-1">Order</p>
          </div>
        </Link>

        <Link to={"/sellerorder"}>
          <div
            className="flex flex-row hover:bg-[#FFFFFF] pt-2 pb-2 pl-2 mb-2"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            {" "}
            <span>
              <img
                src="../assests/icons/inventory.svg"
                className="w-full h-full"
              />
            </span>
            <p className="pl-1">Inventory</p>
          </div>
        </Link>

        <Link to={"/sellerdiscount"}>
          <div
            className="flex flex-row hover:bg-[#FFFFFF] pt-2 pb-2 pl-2 mb-2"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            {" "}
            <span>
              <img
                src="../assests/icons/discount.svg"
                className="w-full h-full"
              />
            </span>
            <p className="pl-1">Discount & Promotions</p>
          </div>
        </Link>

        <Link to={"/sellerorder"}>
          <div
            className="flex flex-row hover:bg-[#FFFFFF] pt-2 pb-2 pl-2 mb-2"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            {" "}
            <span>
              <img
                src="../assests/icons/product.svg"
                className="w-full h-full"
              />
            </span>
            <p className="pl-1">Product</p>
          </div>
        </Link>

        <Link to={"/sellerorder"}>
          <div
            className="flex flex-row hover:bg-[#FFFFFF] pt-2 pb-2 pl-2 mb-2"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <span>
              {" "}
              <img
                src="../assests/icons/analytics.svg"
                className="w-full h-full"
              />
            </span>{" "}
            <p className="pl-1">Analytics</p>
          </div>
        </Link>

        <Link to={"/sellerorder"}>
          <div
            className="flex flex-row hover:bg-[#FFFFFF] pt-2 pb-2 pl-2 mb-2"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <span>
              <img
                src="../assests/icons/settings.svg"
                className="w-full h-full"
              />
            </span>
            <p className="pl-1">Setting</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideMenuSeller;
