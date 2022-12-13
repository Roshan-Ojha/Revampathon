import Homepage from "./Homepage";
import React, { lazy, Suspense, useContext } from "react";
import AdContext from "../store/noAddContext";
import MagazineLogin from "./Popup/MagazineLogin";
import AddMagazine from "./Magazine/AddMagazine";
import MagazineHome from "./Magazine/MagazineHome";
import { Route, Routes } from "react-router-dom";

const Loginpopup = lazy(() => import("./Popup/PopupLogin"));

function Main() {
  const useAdContext = useContext(AdContext);
  return (
    <div>
      
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
      <Routes>
      <Route path="/" element={<Homepage/>}/>
        <Route path="/magazine" element={<MagazineHome/>} />
      </Routes>

    </div>
  );
}
export default Main;
