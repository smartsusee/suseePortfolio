import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Purchase from "./Components/Purchase.jsx";
import PortfolioProfile from "./Components/Profile.jsx";

AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/Profile" element={<PortfolioProfile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
