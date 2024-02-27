import React, { useState, useEffect } from "react";
import { Menu } from "react-feather";
import axios from "axios";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import { cropString } from "../utils/utils";
import { BASE_URL } from "../api/api";

// add product manipulation

const SellerProduct = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [products, setProducts] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Function to fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/productsbystore`,
          {
            params: {
              shop: "65d7338168bd195c22bc4bd0",
            },
          }
        );
  
        const products=response.data.shop.products
        // Log the product data
        console.log("Product Data:", products);
  
        setProducts(response.data.shop.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    // Call the fetchProducts function
    fetchProducts();
  }, []);
  

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
      <SideMenuSeller isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-40 space-y-2 ${
          isSidebarOpen ? "w-4/5" : "w-full"
        }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="text-[#333333] space-y-1 pt-10">
          <p className="text-3xl font-Gorditas ">Hello Seller</p>
          <p className="font-Gorditas ">Here are your products</p>
        </div>

        {/* add product */}
        <div className="flex">
          <button className="text-[#FFFFFF] text-[12px] font-Montserrat bg-[#333333] pt-1 pb-1 pl-6 pr-6 ml-auto">
            + Add Product
          </button>
        </div>

        {/* product table */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-2">
            <p className="text-[12px] w-1/6 ">Serial No.</p>
            <p className="text-[12px] w-1/6 pl-4">Product Image</p>
            <p className="text-[12px] w-2/6">Product Name</p>
            <p className="text-[12px] w-1/6">Product ID</p>
            <p className="text-[12px] w-3/6 pl-10">Product Description</p>
            <p className="text-[12px] w-1/6">Product Price</p>
          </div>
          {products?.map((product, index) => (
            <div className="flex flex-row justify-between gap-2 text-[#000000] text-[14px] h-[150px] shadow-md pl-2" key={index}>
              <div className="w-1/6 font-Montserrat flex flex-row items-center">
                {index+1}
              </div>
              <div className="w-1/6 font-Montserrat flex">
                {/* <img src="../assests/images/facewash.svg" /> */}
                <img src={product?.product_primary_image_url} className="p-2 w-[200px] h-[150px]" />
              </div>
              <div className="w-2/6 font-Montserrat flex items-center">
                {cropString(product?.products_title,25)}
              </div>
              <div className="w-1/6 font-Montserrat flex items-center">
                {product?._id}
              </div>
              <div className="w-3/6 font-Montserrat flex items-center">
                {cropString(product?.products_description,300)}
              </div>
              <div className="w-1/6 font-Montserrat flex items-center">
                {product?.variants1_mrp_price}
              </div>
            </div>
          ))}
          {/* <div className="flex flex-row justify-between  text-[#000000] text-[14px] h-[82px] shadow-md pl-2">
            <div className="w-1/6 font-Montserrat flex flex-row items-center">
              2
            </div>
            <div className="w-1/6 font-Montserrat flex">
              <img src="../assests/images/facewash.svg" />
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">
              Colorbar Facewash
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">
              EXVFG12rtgh356
            </div>
            <div className="w-2/6 font-Montserrat flex items-center">
              This sulphate-free face wash is gentle, hydrating
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">₹100</div>
          </div> */}
          {/* <div className="flex flex-row justify-between  text-[#000000] text-[14px] h-[82px] shadow-md pl-2">
            <div className="w-1/6 font-Montserrat flex flex-row items-center">
              3
            </div>
            <div className="w-1/6 font-Montserrat flex">
              <img src="../assests/images/facewash.svg" />
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">
              Colorbar Facewash
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">
              EXVFG12rtgh356
            </div>
            <div className="w-2/6 font-Montserrat flex items-center">
              This sulphate-free face wash is gentle, hydrating
            </div>
            <div className="w-1/6 font-Montserrat flex items-center">₹100</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SellerProduct;
