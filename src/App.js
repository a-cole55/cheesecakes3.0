import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationMenu from "./components/NavigationMenu.js";
import HomeLogo from "./assets/default-min.png";
// import "./Home.css";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

function App() {
  return (
    <Router>
    <div class="App">
       <NavigationMenu className="header" fixed="top" />       
        <img src={HomeLogo}></img>
    </div>
    </Router>
  );
}

export default App;
