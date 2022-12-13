import Homepage from "./Homepage";
import React, { lazy, Suspense, useContext } from "react";
import AdContext from "../store/noAddContext";
import MagazineLogin from "./Popup/MagazineLogin";
import AddMagazine from "./Magazine/AddMagazine";

const Loginpopup = lazy(() => import("./Popup/PopupLogin"));

function Main() {
  const useAdContext = useContext(AdContext);
  return (
    <div>
      {/* <Homepage></Homepage> */}
      {useAdContext.blockAd && (
        <Suspense fallback={<p>Loading</p>}>
          <Loginpopup></Loginpopup>
        </Suspense>
      )}

      {useAdContext.magazine && (
        <Suspense fallback={<p>Loading</p>}>
          <MagazineLogin></MagazineLogin>
        </Suspense>
      )}
      <AddMagazine></AddMagazine>
    </div>
  );
}
export default Main;
