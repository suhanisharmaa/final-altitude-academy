import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home'
import About from "./components/About";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import { Outlet } from "react-router-dom";
// import StudyMaterial from "./components/StudyMaterial";
// import Login from "./components/Login";
// import Payment from "./components/Payment";
// import { auth } from "./components/firebase";
// import { useStateValue } from "./components/StateProvider";
// import Checkout from "./components/Checkout";


function App () {
  return (  
    <Router>
      <div className="App">
        <Routes>
        <Route path="/reviews" element={
          <React.Fragment>
            <Header />
            <Reviews />
            <Footer />
          </React.Fragment>
        } />
          <Route path="/gallery" element={
          <React.Fragment>
            <Header />
            <Gallery />
            <Footer />
          </React.Fragment>
        } />
          <Route path="/about" element={
          <React.Fragment>
            <Header />
            <About />
            <Footer />
          </React.Fragment>
        } />
          <Route path="/" element={
          <React.Fragment>
            <Header />
            <Home />
            <Footer />
          </React.Fragment>
        } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
