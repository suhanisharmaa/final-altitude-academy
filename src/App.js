import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home'
import About from "./components/About";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
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
        <Switch>
        <Route path="/reviews">
            <Header />
            <Reviews />
            <Footer />
          </Route>
          <Route path="/gallery">
            <Header />
            <Gallery />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
