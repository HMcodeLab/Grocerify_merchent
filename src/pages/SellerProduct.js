import React, { useState, useEffect, useContext } from "react";
import { Menu } from "react-feather";
import axios from "axios";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import { cropString } from "../utils/utils";
import { BASE_URL } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalInfo } from "../App";
// add product manipulation

const SellerProduct = () => {
  const { sellerDetails } = useContext(GlobalInfo)
  console.log(sellerDetails)

  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [products, setProducts] = useState();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const fetchProducts = async () => {
    // console.log(`${BASE_URL}/api/productsbystore`)
    try {

      const response = await axios.get(
        `${BASE_URL}api/productsbystore`,
        {
          params: {
            shop: sellerDetails?.Shop?._id,
          },
        }
      );
      console.log(response.data.shop.products)

      setProducts(response.data.shop.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    if (sellerDetails?.Shop?._id) {
      fetchProducts();

    }
  }, [sellerDetails?.Shop?._id]);


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
        className={`flex flex-col pl-20 pr-16 pt-8 pb-40 space-y-2 ${isSidebarOpen ? "w-4/5" : "w-full"
          }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="text-[#333333] space-y-1 py-10">
          <p className="text-3xl font-Gorditas ">Hello Seller</p>
          <p className="font-Gorditas ">Here are your products</p>
        </div>

        {/* add product */}
        {/* <div className="flex" onClick={() => navigate('/add_product')}>
          <button className="text-[#FFFFFF] text-[12px] font-Montserrat bg-[#333333] pt-1 pb-1 pl-6 pr-6  ml-auto" >
            + Add Product
          </button>
        </div> */}

        {/* product table */}
        <div className="flex flex-col space-y-6 ">
          <div className="justify-center bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-2" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 3fr 3fr 4fr 1.5fr", justifyContent: "center" }}>
            <p className="text-[12px] w-1/6 ">Serial No.</p>
            <p className="text-[12px] w-1/6 pl-4">Product Image</p>
            <p className="text-[12px] w-2/6">Product Name</p>
            <p className="text-[12px] w-1/6">Product ID</p>
            <p className="text-[12px] w-3/6 pl-10">Product Description</p>
            <p className="text-[12px] w-1/6">Product Price</p>
          </div>
          {products?.map((product, index) => (
            <div className="justify-between gap-2 text-[#000000] text-[14px] h-[150px] shadow-md pl-2" key={index} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 3fr 3fr 4fr 1.5fr" }}>
              <div className=" font-Montserrat flex flex-row items-center">
                {index + 1}
              </div>
              <div className=" font-Montserrat flex">
                {/* <img src="../assests/images/facewash.svg" /> */}
                <img src={product?.product_primary_image_url} className="p-2 w-[auto]  h-[100px] object-contain" />
              </div>
              <div className=" font-Montserrat flex items-center">
                {cropString(product?.products_title, 25)}
              </div>
              <div className=" font-Montserrat flex items-center">
                {product?._id}
              </div>
              <div className=" font-Montserrat flex items-center">
                {cropString(product?.products_description, 300)}
              </div>
              <div className=" font-Montserrat flex items-center">
                Rs. {product?.stores[0]?.variants1_mrp_price}
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default SellerProduct;
