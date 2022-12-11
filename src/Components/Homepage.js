import "../CSS/Homepage.css";
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
function Homepage(props) {
  const [removeAd, setRemoveAd] = useState(false);

  const useAdContext = useContext(AdContext);
  return (
    <div
      className={useAdContext.blockAd ? "loginhome" : "home"}
      onClick={(e) => {
        e.stopPropagation();
        useAdContext.showad();
      }}
    >
      <div className="header">
        <img src={logo} className="logo"></img>
        <nav className="navbar">
          <ul>
            <li>गृह पृष्ठ</li>
            <li>समुदाय</li>
            <li>राशिफल</li>
            <li>खेल</li>
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

      <div className="insideHomepage">
        <div className="category">
          <div className="head">शीर्षक</div>
          <ul>
            <li>समाचार</li>
            <li>वित्त</li>
            <li>जीवनशैली</li>
            <li>मनोरञ्जन</li>
            <li>अन्तर्राष्ट्रिय</li>
            <li>प्रविधि</li>
            <li>स्वास्थ्य सेवा</li>
            <hr></hr>
            <li>प्रविधि</li>
            <li>स्वास्थ्य सेवा</li>
          </ul>
        </div>
        <div className="newspart">
          <div className="newscategory">राजनीति</div>
          <div className="photopart"></div>
          <img src={polits} />
          <div className="newscontent">
            <div className="newsHeadline">
              सात प्रदेशसभामा एमालेले क-कसलाई पठायो ?
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
          <div className="relatedheading">सम्बन्धित समाचार</div>
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
    </div>
  );
}
export default Homepage;
