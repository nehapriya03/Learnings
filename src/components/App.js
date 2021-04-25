import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
const NavBar = React.lazy(() => import("./NavBar"));
const HomePage = React.lazy(() => import("./HomePage"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const SignUp = React.lazy(() => import("./SignUp"));
const Login = React.lazy(() => import("./Login"));
const DoctorPage = React.lazy(() => import("./DoctorPage"));
const CaretakerPage = React.lazy(() => import("./CaretakerPage"));
const DateAndMatePage = React.lazy(() => import("./DateAndMatePage"));

const App = () => {
  const [user, setUser] = useState(null);

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
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path={"/"} exact component={HomePage} />
            <Route path={"/about-us"} component={AboutUs} />
            <Route path={"/sign-up"} component={SignUp} />
            <Route
              path={"/login"}
              component={() => <Login setUser={setUser} />}
            />
            <Route
              path={"/signup"}
              component={() => <SignUp setUser={setUser} user={user} />}
            />
            <Route path={"/doctor"} component={DoctorPage} />
            <Route path={"/caretaker"} component={CaretakerPage} />
            <Route path={"/date-mate"} component={DateAndMatePage} />
            <Route path={"*"} component={() => <Redirect to={"/"} />} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;
