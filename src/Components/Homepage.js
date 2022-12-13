import "../CSS/Homepage.css";
import speaker from "../assets/speaker.png";
import newsimage from "../assets/mountain.png";
import logo from "../assets/etaja_logo.png";
import account from "../assets/user.png";
import polits from "../assets/politics.jpeg";
import sports from "../assets/sports.jpeg";
import valley from "../assets/valley.jpeg";
import science from "../assets/science.jpeg";
import Loginpopup from "./Popup/PopupLogin";
import nologin from "../assets/noadicon.png";
import { createContext, useContext, useEffect, useState } from "react";
import AdContext from "../store/noAddContext";
import Navbar from "../Pageparts/Navbar";
import sound from "../assets/check.mp3";
import CategoryBar from "../Pageparts/Categorybar";
import daraz from "../assets/daraz.png";
import berger from "../assets/berger.png";
import Ad from "./Ad/Ad";
import Iframe from "./Popup/Iframe";
function Homepage(props) {
  const useAdContext = useContext(AdContext);
  const [showiframe, setshowiframe] = useState(null);

  function setshowiframeHandler() {
    setshowiframe(null);
  }

  return (
    <div
      className={
        useAdContext.blockAd || useAdContext.magazine ? "loginhome" : "home"
      }
    >
      <Navbar></Navbar>
      {!useAdContext.hidead && (
        <div
          style={{ width: "auto", display: "flex", justifyContent: "center" }}
        >
          <img src={daraz} onClick={() => setshowiframe("first")}></img>
          {showiframe === "first" && (
            <Iframe
              src={"https://www.daraz.com.np/"}
              setshow={setshowiframeHandler}
            ></Iframe>
          )}
        </div>
      )}
      <div className="insideHomepage">
        <CategoryBar></CategoryBar>
        <div className="newspart">
          <div className="newscategory">राजनीति</div>
          <div className="photopart"></div>
          <img src={polits} />
          <div className="newscontent">
            <div className="newsHeadline">
              सात प्रदेशसभामा एमालेले क-कसलाई पठायो ?
              <audio controls className="audio">
                <source src={sound} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="date">
              मंसिर २४, २०७९ <span>कान्तिपुर संवाददाता</span>
              <br></br>
            </div>
            <div className="actualcontent">
              <p>
                काठमाडौँ — नेकपा एमालेले सातवटै प्रदेशसभामा समानुपातिकतर्फ
                निर्वाचित सांसदहरुको नाम छनोट गरेको छ । पार्टी मुख्यालय च्यालसमा
                शनिबार बसेको सचिवालय बैठकले उनीहरुको नाम छनोट गरेको हो ।
                जसअनुसार खास आर्य महिलातर्फ शीला दीक्षित कार्की (मोरङ), तारादेवी
                ढकाल (झापा), निरादेवी खनाल आचार्य (सुनसरी), गीतादेवी रेग्मी
                (उदयपुर) रहेका छन् ।
              </p>

              <p>
                त्यसैगरी आदिवासी जनजातितर्फ सृजना दनुवार (उदयपुर), कमला थापा मगर
                (झापा), मिना श्रेष्ठ (सुनसरी), सृजना राई(भोजपुर), मालतीकुमारी
                लिम्बु (मोरङ), लहरुमाया जिमी याक्खा(सुनसरी) रहेकी छन् । थारु
                महिलामा ललिताकुमारी चौधरी (मोरङ), दलित महिलामा कमला दर्नाल
                (तेह्रथुम), मधेसी महिलातर्फ गीता रानी महतो (मोरङ), मुस्लिम
                महिलातर्फ नुरशादी वेगम (मोरङ) रहेकी छिन् ।
              </p>
            </div>
          </div>
        </div>

        <div className="relatedNews">
          <div className="relatedheading">मुख्य समाचार</div>
          <div className="related">
            <img src={sports} />
            <div>
              <div className="relatedcategory">खेल</div>
              <div className="relatedHeadline">
                एमबाप्पेविरुद्ध जोसिलो इंग्ल्यान्ड
              </div>
            </div>
          </div>
          <div className="related">
            <img src={valley} />
            <div>
              <div className="relatedcategory">उपत्यका</div>
              <div className="relatedHeadline">
                उपत्यकामा मेलम्चीको पानी तेस्रोपटक पुनः वितरण सुरू
              </div>
            </div>
          </div>
          <div className="related">
            <img src={science} />
            <div>
              <div className="relatedcategory">विज्ञान र प्रविधि</div>
              <div className="relatedHeadline">
                के हो ट्वीटर र एप्पलबीचको विवाद ?
              </div>
            </div>
          </div>
        </div>
      </div>
      {!useAdContext.hidead && (
        <div
          style={{
            width: "auto",
            display: "flex",
            justifyContent: "center",
            margin: "100px",
          }}
        >
          <img src={berger} onClick={() => setshowiframe("second")}></img>
          {showiframe === "second" && (
            <Iframe
              src={
                "https://www.bergernepal.com/product-detail/silk-breathe-easy"
              }
              setshow={setshowiframeHandler}
            ></Iframe>
          )}
        </div>
      )}
    </div>
  );
}
export default Homepage;
