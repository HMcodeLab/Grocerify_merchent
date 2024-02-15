import React from "react";
import Categories from "../components/Categories";
import OrderNow from "../components/OrderNow";
import WhatsNew from "../components/WhatsNew";
// import "../styles/MoreStore.css";

const MoreStore = () => {
  return (
    <div className="main">
      <div className="categories">
        <Categories />
      </div>

      <div className="rightmain space-y-4">
        <div className="bg-[#EDF1E0] relative">
          <img
            src="../assests/images/ordernowleft.svg"
            className=" h-[450px]"
          />
          <img
            src="../assests/images/ordernowgp.svg"
            className="w-full h-[450px] absolute top-0"
          />
          <button className="absolute font-Montserrat bottom-5 left-[470px] bg-[#58B310] text-[#FFFFFF] rounded-2xl pt-1 pb-1 pr-4 pl-4 hover:bg-[#FFFFFF] hover:text-[#58B310] hover:text-bold">
            ORDER NOW
          </button>
        </div>
        <div className="bg-[#FFFFFF]">
          <div className="text-xl pt-1 pb-1 pl-10 hover:bg-[#58B310] hover:text-[#FFFFFF]">
            {" "}
            STORES IN <span className="text-[#222222]">1KM </span>{" "}
          </div>
          <div className="grid grid-cols-2 gap-3 p-4">
            <div className="relative hover:text-xl">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full h-1/2 hover:text-3xl">
                Chandigarh store
              </p>
            </div>
            <div>
              <img src="../assests/images/woodenstore.svg" className="w-full" />
            </div>
            <div>
              <img src="../assests/images/woodenstore.svg" className="w-full" />
            </div>
            <div>
              <img src="../assests/images/woodenstore.svg" className="w-full" />
            </div>
            <div>
              <img src="../assests/images/woodenstore.svg" className="w-full" />
            </div>
            <div>
              <img src="../assests/images/woodenstore.svg" className="w-full" />
            </div>
          </div>
        </div>
        <div>
          <WhatsNew />
        </div>
        <div className="bg-[#FFFFFF]">
          <div className="text-xl pt-1 pb-1 pl-10 hover:bg-[#58B310] hover:text-[#FFFFFF]">
            {" "}
            STORES IN <span className="text-[#222222]">2KM </span>{" "}
          </div>
          <div className="grid grid-cols-2 gap-3 p-4">
            <img src="../assests/images/woodenstore.svg" className="w-full" />
            <img src="../assests/images/woodenstore.svg" className="w-full" />
            <img src="../assests/images/woodenstore.svg" className="w-full" />
            <img src="../assests/images/woodenstore.svg" className="w-full" />
          </div>
        </div>
        <div>
          <WhatsNew />
        </div>
        <div className="bg-[#FFFFFF]">
          <div className="text-xl pt-1 pb-1 pl-10 hover:bg-[#58B310] hover:text-[#FFFFFF]">
            {" "}
            STORES IN <span className="text-[#222222]">10KM </span>{" "}
          </div>
          <div className="grid grid-cols-2 gap-3 p-4">
            <img src="../assests/images/woodenstore.svg" className="w-full" />
            <img src="../assests/images/woodenstore.svg" className="w-full" />
            <img src="../assests/images/woodenstore.svg" className="w-full" />
            <img src="../assests/images/woodenstore.svg" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreStore;
