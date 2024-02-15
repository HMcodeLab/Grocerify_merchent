// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturedStore from "./pages/FeaturedStore";
import MoreStore from "./pages/MoreStore";
import ContactUs from "./pages/ContactUs";
import PaymentOptions from "./pages/PaymentOptions";
import BilingDetails from "./pages/BilingDetails";
import HotDeals from "./pages/HotDeals";
import YourAccount from "./pages/YourAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<FeaturedStore />}></Route>
        <Route exact path={"/morestore"} element={<MoreStore />}></Route>
        <Route exact path={"/contactus"} element={<ContactUs />}></Route>
        <Route exact path={"/payment"} element={<PaymentOptions />}></Route>
        <Route exact path={"/biling"} element={<BilingDetails />}></Route>
        <Route exact path={"/hotdeals"} element={<HotDeals />}></Route>
        <Route exact path={"/youraccount"} element={<YourAccount />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
