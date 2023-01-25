// أعوذ بالله من الشيطان الرجيم سْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيم أعوذ

//________IMPORTS_____________
import React from "react";
//____________________________

//________FUNCTION____________
const Helmet = (props) => {
  document.title = "Website | " + props.title;
  return <div className="w-100">{props.children}</div>;
};
//____________________________

//________EXPORTS_____________
export default Helmet;
//____________________________
