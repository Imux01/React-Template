// أعوذ بالله من الشيطان الرجيم سْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيم أعوذ

//________IMPORTS_____________
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
//____________________________

//________FUNCTION____________
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
};
//____________________________

//________EXPORTS_____________
export default Routers;
//____________________________
