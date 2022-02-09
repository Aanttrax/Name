import { Routes, Route } from "react-router";
import LandingPage from './Components/LandingPage.js';
import './App.css';
import Nav from "./Components/Nav.js";
import HomePage from "./Components/HomePage.js";
import AddName from "./Components/AddName.js";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path = '/' element={<LandingPage/>}></Route>
        <Route exact path = '/home/:name' element ={<HomePage/>}></Route>
        <Route exact path = '/add' element = {<AddName/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
