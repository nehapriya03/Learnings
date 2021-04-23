import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/about-us"} component={AboutUs} />
        <Route path={"/sign-up"} component={SignUp} />
        <Route path={"/login"} component={Login} />
      </div>
    </Router>
  );
};

export default App;
