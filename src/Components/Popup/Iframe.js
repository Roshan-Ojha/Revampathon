import "./Iframe.css";
import close from "../../assets/x.png";
function Iframe(props) {
  return (
    <div className="showiframe">
      <div className="iframeimage">
        <img
          src={close}
          onClick={() => {
            props.setshow();
          }}
        ></img>
      </div>
      <iframe src={props.src} height={475}></iframe>
    </div>
  );
}
export default Iframe;
