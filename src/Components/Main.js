import Homepage from "./Homepage";
import React, { useContext } from "react";
import Loginpopup from "./Popup/PopupLogin";
import AdContext from "../store/noAddContext";
function Main() {
  const useAdContext = useContext(AdContext);
  return (
    <div>
      <Homepage></Homepage>
      {useAdContext.blockAd && <Loginpopup></Loginpopup>}
    </div>
  );
}
export default Main;
