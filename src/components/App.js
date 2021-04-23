import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedNav, setSelectedNav] = useState("HOME");

  return (
    <Router>
      <div>
        <React.Suspense fallback={<p>Loading...</p>}>
          <NavBar
            user={user}
            setUser={setUser}
            selectedNav={selectedNav}
            setSelectedNav={setSelectedNav}
          />
          <Route path={"/"} exact component={HomePage} />
          <Route path={"/about-us"} component={AboutUs} />
          <Route path={"/sign-up"} component={SignUp} />
          <Route
            path={"/login"}
            component={() => <Login user={user} setUser={setUser} />}
          />
          <Redirect to={"/"} />
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;
