import "./Login.css";
import logo from "../../assets/etaja_logo.png";
import AdContext from "../../store/noAddContext";
import { useContext } from "react";
function Loginpopup(props) {
  const useAdContext = useContext(AdContext);
  return (
    <div className="Login">
      <div className="Sagarmatha">
        <img src={logo} alt=""></img>
      </div>
      <hr className="firsthr"></hr>
      <div className="welcome">
        Welcome to &nbsp;<span>Taja Khabar</span>
      </div>
      <form>
        <div className="Email">
          <input placeholder="Email"></input>
        </div>
        <div className="Password">
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="forgot" onClick={() => useAdContext.showad()}>
          Forgot password?
        </div>
        <div className="check">
          <input type="checkbox" id="keep"></input>
          <label htmlFor="keep">Remember Me</label>
        </div>
        <div className="submit">
          <input type="submit" value="Login"></input>
        </div>
      </form>
      <div className="support">
        Don't have an account yet? &nbsp;<span>Sign up now</span>
      </div>
    </div>
  );
}
export default Loginpopup;
