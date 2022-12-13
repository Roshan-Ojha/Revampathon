import AdContext from "../../store/noAddContext";
import Navbar from "../../Pageparts/Navbar";
import CategoryBar from "../../Pageparts/Categorybar";
import sports from "../../assets/sports.jpeg";
import valley from "../../assets/valley.jpeg";
import science from "../../assets/science.jpeg";
import { useContext } from "react";

import AddMagazine from "./AddMagazine";
import WantToAddMagazine from "./wantoAddmagazine";
function MagazineHome() {
  const useAdContext = useContext(AdContext);
  return (
    <div
      className={
        useAdContext.blockAd || useAdContext.magazine ? "loginhome" : "home"
      }
    >
      <Navbar></Navbar>
      <div className="insideHomepage">
        <CategoryBar></CategoryBar>
        <div className="magazinepart">
          <WantToAddMagazine></WantToAddMagazine>
          {useAdContext.wantaddmagazine && <AddMagazine></AddMagazine>}
        </div>
        <div></div>
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
    </div>
  );
}
export default MagazineHome;
