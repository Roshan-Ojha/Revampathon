import logo from "../assets/etaja_logo.png";
import account from "../assets/user.png";
import AdContext from "../store/noAddContext";
import nologin from "../assets/noadicon.png";
import { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const useAdContext = useContext(AdContext);
  return (
    <div className="header">
      <img src={logo} className="logo"></img>
      <nav className="navbar">
        <ul>
          <Link to="/">
            <li>गृह पृष्ठ</li>
          </Link>
          <li>समुदाय</li>
          <li>राशिफल</li>
          <li>खेल</li>

          <Link to="/magazine">
            <li
            // onClick={() => {
            //   useAdContext.showmagazine();
            // }}
            >
              म्यागजीन
            </li>
          </Link>
        </ul>
      </nav>
      <div className="rightside">
        <img src={account} className="account"></img>
        <div
          className="removeadd"
          onClick={() => {
            useAdContext.adblock();
          }}
        >
          <img src={nologin} className="noadd"></img>&nbsp;Remove Ads
        </div>
      </div>
    </div>
  );
}
export default Navbar;
