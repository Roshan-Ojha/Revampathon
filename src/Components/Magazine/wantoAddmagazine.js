import "./wanttoaddmagazine.css";
import AdContext from "../../store/noAddContext";
import { useContext } from "react";
import MagazineLogin from "../Popup/MagazineLogin";
function WantToAddMagazine() {
  const magazineContext = useContext(AdContext)
  function acticlebuttonHandler(){
    if(!magazineContext.magazine){
      magazineContext.showmagazine()
    }

  }

  const useAdContext = useContext(AdContext);
  return (
    <div className="mainadd">
      <div className="wantto">Want to add new magzaine articles?</div>
      <button
        className="articlebutton"
        onClick={acticlebuttonHandler}
      >
        Add Article
      </button>
    </div>
  );
}
export default WantToAddMagazine;
