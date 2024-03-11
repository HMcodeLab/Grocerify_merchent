import React, { useState, useEffect, useContext } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import DueTableSeller from "../components/DueTableSeller";
import ActiveTableSeller from "../components/ActiveTableSeller";
import DeliveredTableSeller from "../components/DeliveredTableSeller";
import OnTheWayTableSeller from "../components/OnTheWayTableSeller";
import { Toaster } from "react-hot-toast";
import { GlobalInfo } from "../App";
import { getOrderByShop } from "../helper/helper";

// cards data, navigation - sales, visitors
// table data
// pending, success status colors

const SellerDashboard = () => {

  const { sellerDetails } = useContext(GlobalInfo)
  console.log(sellerDetails)
  const [orders, setOrders] = useState([]);
  const [totalSales, setTotalSales] = useState();
  const [todayOrders, setTodayOrders] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState();


  useEffect(() => {
    getOrdersByShop();
  }, [])

  const getOrdersByShop = async () => {

    const orders = await getOrderByShop();
    console.log(orders.data.orders)
    setOrders(orders.data.orders)

    // find todays orders
    let temp = [];
    setTodayOrders(0);
    orders.data.orders.forEach((val, ind) => {
      if (val.ordered_on.split('T')[0] === new Date().toISOString().split('T')[0]) {

        setTodayOrders((prev) => prev + 1)
      }
      temp.push(val.ordered_by)

    })

    console.log(temp)
    setTotalCustomers([...new Set(temp)])



    // find total sales
    const totalSales = orders.data.orders.reduce((val, acc) => {
      // console.log(val, acc)
      return val + acc.order_price
    }, 0)
    setTotalSales(totalSales)


  }


  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("due");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderTable = () => {
    switch (activeButton) {
      case "due":
        return <DueTableSeller data={orders.filter((val) => val.status === 'ordered')} />;
      case "active":
        return <DueTableSeller data={orders.filter((val) => val.status === 'cancelled')} />;
      case "delivered":
        return <DueTableSeller data={orders.filter((val) => val.status === 'delivered')} />;
      case "onTheWay":
        return <DueTableSeller data={orders.filter((val) => val.status === 'shipped')} />;
      default:
        return null;
    }
  };

  if (!sellerDetails) {
    return <h3>Loading...</h3>

  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex flex-row h-auto">
        {/* side menu */}
        <button
          onClick={() => {
            toggleSidebar();
          }}
          className="absolute text-[#58B310] p-2 ml-2 mt-6 rounded-md"
          style={{ height: "30px" }}
        >
          <Menu size={30} />
        </button>
        <SideMenuSeller isOpen={isSidebarOpen} onToggle={toggleSidebar} />

        {/* Main content */}
        <div
          className={`flex flex-col pl-20 pr-16 pt-8 pb-32 space-y-10 ${isSidebarOpen ? "w-4/5" : "w-full"
            }`}
        >
          {/* Search bar */}
          <SearchBarSeller />

          {/* description */}
          <div className="font-Gorditas text-[#333333] space-y-1">
            <p className="text-3xl font-Gorditas">Hello Seller</p>
            <p className="font-Gorditas">{`Today is ${currentDate}`}</p>
          </div>

          {/* data cards */}
          <div className="grid grid-cols-4 gap-14">
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Total Sales</p>
                <p className="text-[#58B310] text-xl">Rs. {totalSales}</p>
                <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p>
              </div>
              <div>
                <img src="../assests/icons/Sales.svg" />
              </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Visitors</p>
                <p className="text-[#58B310] text-xl">{sellerDetails.Shop?.visitors}</p>
                <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p>
              </div>
              <div>
                <img src="../assests/icons/visitors.svg" />
              </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">New Orders</p>
                <p className="text-[#58B310] text-xl">{todayOrders}</p>
                <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p>
              </div>
              <div>
                <img src="../assests/icons/received.svg" />
              </div>
            </div>
            <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Customers</p>
                <p className="text-[#58B310] text-xl">{totalCustomers?.length}</p>
                <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p>
              </div>
              <div>
                <img src="../assests/icons/target.svg" />
              </div>
            </div>
            {/* <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Total Earning</p>
                <p className="text-[#58B310] text-xl">$2478</p>
                <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p>
              </div>
              <div>
                <img src="../assests/icons/Salary.svg" />
              </div>
            </div> */}
            {/* <div className="flex flex-row justify-between shadow-lg rounded-lg h-full pt-4 pb-6 pl-4 pr-2">
              <div className="font-Montserrat space-y-1">
                <p className="text-[#333333] text-xl">Delivered Order</p>
                <p className="text-[#58B310] text-xl">$2478</p>
                <p className="text-[#FFB800] text-xs font-semibold pt-1">
                  27% last week
                </p>
              </div>
              <div>
                <img src="../assests/icons/Courier.svg" />
              </div>
            </div> */}
          </div>

          {/* Products */}
          <div className="flex flex-row gap-4 font-Montserrat pt-4">
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "due" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("due")}
            >
              Ordered
            </button>
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "active" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("active")}
            >
              Cancelled
            </button>
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "delivered" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("delivered")}
            >
              Delivered
            </button>
            <button
              className={`text-[#000000] pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold hover:text-[#FFFFFF] hover:bg-[#58B310] ${activeButton === "onTheWay" ? "bg-[#58B310] text-[#FFFFFF]" : ""
                }`}
              onClick={() => setActiveButton("onTheWay")}
            >
              On the way
            </button>
          </div>
          {renderTable()}

        </div>
      </div>
    </>
  );
};

export default SellerDashboard;
