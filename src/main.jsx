import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import PrivacyPolicy from "./PrivacyPolicy";
import TermCondition from "./TermCondition";
import Home from "./Home";
import '../public/css/main.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="term-conditions" element={<TermCondition />} />
    </Routes>
  </BrowserRouter>,
);
