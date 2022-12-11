import logo from "./logo.svg";
import "./Components/Popup/Login.css";
import "./CSS/Homepage.css";
import "./App.css";
import Main from "./Components/Main";
import { AdContextProvider } from "./store/noAddContext";
function App() {
  return (
    <div className="App">
    <AdContextProvider>

      <Main></Main>
    </AdContextProvider>
    </div>
  );
}

export default App;
