import { useContext, useReducer } from "react";
import AdContext from "../../store/noAddContext";
import Navbar from "../../Pageparts/Navbar";
import CategoryBar from "../../Pageparts/Categorybar";
import sports from "../../assets/sports.jpeg";
import valley from "../../assets/valley.jpeg";
import science from "../../assets/science.jpeg";
import "./AddMagzine.css";
function AddMagazine() {
  const initialState = {
    firstname: "",
    lastname: "",
    institutin: "",
    title: "",
    content: "",
    photo: "",
  };

  function formHandler() {
    console.log(magazineForm);
  }

  function reducerFn(prevState, action) {
    // if (action.type==="firstname"){
    //   return{
    //     firstname:action.val
    //   }
    // }
    switch (action.type) {
      case "firstname":
        console.log("hello");
        return {
          ...prevState,
          firstname: action.val,
        };
      case "lastname":
        return {
          ...prevState,
          lastname: action.val,
        };
      case "institution":
        return {
          ...prevState,
          institutin: action.val,
        };
      case "content":
        return {
          ...prevState,
          title: action.val,
        };
      case "image":
        return {
          ...prevState,
          photo: action.val,
        };
      default: {
        return prevState;
      }
    }
  }

  const useAdContext = useContext(AdContext);
  const [magazineForm, dispathchMagazineForm] = useReducer(
    reducerFn,
    initialState
  );
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
          <div className="newscategory">म्यागजीन</div>
          <div className="magzineform">
            <div className="formTitle">Article Upload Form</div>
            <div className="inputline">
              <div>
                <span>
                  Author First Name<sup>*</sup>
                </span>
                <input
                  className="twoway"
                  onChange={(e) =>
                    dispathchMagazineForm({
                      type: "firstname",
                      val: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div>
                <span>
                  Author Last Name<sup>*</sup>
                </span>
                <input
                  className="twoway"
                  onChange={(e) =>
                    dispathchMagazineForm({
                      type: "lastname",
                      val: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
            <div className="inputline">
              <div>
                <span>
                  Institution Name<sup>*</sup>
                </span>
                <input
                  className="twoway"
                  onChange={(e) =>
                    dispathchMagazineForm({
                      type: "institution",
                      val: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div>
                <span>
                  Professions<sup>*</sup>
                </span>
                <input
                  className="twoway"
                  onChange={(e) =>
                    dispathchMagazineForm({
                      type: "content",
                      val: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
            <hr className="formhr"></hr>
            <div className="inputline">
              <div>
                <span>
                  Articel Title<sup>*</sup>
                </span>
                <input
                  className="articletitle"
                  onChange={(e) =>
                    dispathchMagazineForm({
                      type: "photo",
                      val: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
            <div className="inputline">
              <div>
                <span>
                  Articel Title<sup>*</sup>
                </span>
                <textarea className="articletcontent"></textarea>
              </div>
            </div>

            <div className="lastpart">
              <div>
                <input type="file" className="choosefile"></input>
              </div>
              <div>
                <button
                  type="button"
                  className="submitbutton"
                  onClick={formHandler}
                >
                  Submit
                </button>
              </div>
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
    </div>
  );
}
export default AddMagazine;
