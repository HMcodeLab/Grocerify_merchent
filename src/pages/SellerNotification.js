import React, { useEffect, useState } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import { acceptOrder, getOrderByShop } from "../helper/helper";
import toast, { Toaster } from "react-hot-toast";

// functionality


const SellerNotification = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [orders, setOrders] = useState([]);



  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  const getOrdersByShop = async () => {

    const orders = await getOrderByShop();
    console.log(orders?.data)
    setOrders(orders?.data?.orders)


  }

  useEffect(() => {
    getOrdersByShop();

  }, [])


  const acceptOrders = async (id) => {
    console.log('accepted')
    const data = await acceptOrder(id)
    console.log(data)
    if (data.status === 201) {
      toast.success("Order Accepted")
    }
    else {
      toast.error("An Unknown Error Occured . Contact to developer")
    }

  }

  return (
    <>
      <Toaster />
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
          className={`flex flex-col pl-20 pr-16 pt-8 pb-40 space-y-10 ${isSidebarOpen ? "w-4/5" : "w-full"
            }`}
        >
          {/* Search bar */}
          <SearchBarSeller />

          {/* description */}
          <div className="text-[#848484] pl-4">
            <p className="text-2xl font-Gorditas ">Notifications</p>
          </div>

          {/* Order list */}
          <div className="flex flex-col gap-8 pl-4 pr-4">

            {orders.filter((value, index) => value.status === "ordered").map((val, ind) => {
              return (
                <div className="flex flex-col shadow-md gap-6 p-8 rounded-md">
                  <div className="flex flex-row justify-between pb-4">
                    <p className="text-[#333333] text-[20px] font-Montserrat font-semibold">
                      {val.order_id}
                    </p>
                    <div className="flex flex-row gap-6">
                      <button className="text-[#FFFFFF] text-[20px] font-Montserrat bg-[#58B310] rounded-md pl-10 pr-10" onClick={() => acceptOrders(val._id)}>
                        Accept
                      </button>
                      <button className="text-[#FFFFFF] text-[20px] font-Montserrat bg-[#888888] rounded-md pl-10 pr-10">
                        Decline
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-[#333333] font-Montserrat font-thin">
                    <div className="flex flex-row justify-between ">
                      <p>2 X Veg Fried Rice</p>
                      <p>₹250</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>2 X Veg Fried Rice</p>
                      <p>₹250</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>2 X Veg Fried Rice</p>
                      <p>₹250</p>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between">
                      <p>Total Summary</p>
                      <p>₹1050</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                      <p>Deliver To   : </p>
                      <div className="flex flex-col">
                        <p>33/123 Durga Niwas , Sector 22 ,Chandigarh</p>
                        <p>141008,PB,India</p>
                      </div>
                    </div>
                    <div>13 May 2023  at 4:56 pm</div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default SellerNotification;
