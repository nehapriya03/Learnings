import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
const NavBar = React.lazy(() => import("./NavBar"));
const HomePage = React.lazy(() => import("./HomePage"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const SignUp = React.lazy(() => import("./SignUp"));
const Login = React.lazy(() => import("./Login"));

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedNav, setSelectedNav] = useState("HOME");

  useEffect(() => {
    let loggedInUser = localStorage.getItem("loggedInUser");
    if (user === null && loggedInUser) {
      setUser(JSON.parse(loggedInUser).user);
    }
  }, [user]);

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
            component={() => <Login setUser={setUser} />}
          />
          <Redirect to={"/"} />
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;
