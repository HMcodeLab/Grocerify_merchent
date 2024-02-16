import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreStore from "./pages/MoreStore";
import ContactUs from "./pages/ContactUs";
import PaymentOptions from "./pages/PaymentOptions";
import BilingDetails from "./pages/BilingDetails";
import HotDeals from "./pages/HotDeals";
import YourAccount from "./pages/YourAccount";
import StoreFeatured from "./pages/StoreFeatured";
import SellerDashboard from './pages/SellerDashboard';
import SellerOrder from './pages/SellerOrder';
import SellerDiscount from './pages/SellerDiscount';
import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/stores"} element={<StoreFeatured />}></Route>
        <Route exact path={"/morestore"} element={<MoreStore />}></Route>
        <Route exact path={"/contactus"} element={<ContactUs />}></Route>
        <Route exact path={"/payment"} element={<PaymentOptions />}></Route>
        <Route exact path={"/biling"} element={<BilingDetails />}></Route>
        <Route exact path={"/hotdeals"} element={<HotDeals />}></Route>
        <Route exact path={"/youraccount"} element={<YourAccount />}></Route>
        <Route exact path={"/sellerdashboard"} element={<SellerDashboard />}></Route>
        <Route exact path={"/sellerorder"} element={<SellerOrder />}></Route>
        <Route exact path={"/sellerdiscount"} element={<SellerDiscount />}></Route>
        <Route exact path={"/chat"} element={<Chat />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
