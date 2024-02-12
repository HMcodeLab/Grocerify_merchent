// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturedStore from "./pages/FeaturedStore";
import MoreStore from "./pages/MoreStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<FeaturedStore />}></Route>
        <Route exact path={"/morestore"} element={<MoreStore />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
