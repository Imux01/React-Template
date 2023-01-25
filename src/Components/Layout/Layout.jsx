// أعوذ بالله من الشيطان الرجيم سْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيم أعوذ

//________IMPORTS_____________
import React from "react";
import Routers from "../../Routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//____________________________

//________FUNCTION____________
const Layout = () => {
  return <>
    <Header />
    <div>
      <Routers />
    </div>
    <Footer />
  </>;
};
//____________________________

//________EXPORTS_____________
export default Layout;
//____________________________
