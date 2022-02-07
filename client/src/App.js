import { Route } from "react-router";
import LandingPage from './Components/LandingPage.js';
import './App.css';
import Nav from "./Components/Nav.js";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path = '/'><LandingPage/></Route>
    </div>
  );
}

export default App;
