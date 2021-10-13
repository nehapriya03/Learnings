import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isEmptyObject } from "./constants";
const SalespersonLogin = React.lazy(() =>
  import("./Components/SalespersonLogin")
);

const App = () => {
  const [loggedInSP, setLoggedInSP] = useState({});

  useEffect(() => {
    let salesperson = localStorage.getItem("salespersonLoggedIn");
    if (isEmptyObject(loggedInSP) && salesperson) {
      setLoggedInSP(JSON.parse(salesperson).salesperson);
    }
  }, [loggedInSP]);
  return (
    <Router>
      <div>
        <React.Suspense fallback={<span uk-spinner={"ratio: 4.5"}></span>}>
          <Switch>
            <Route path={"/"} exact>
              <SalespersonLogin
                loggedInSP={loggedInSP}
                setLoggedInSP={setLoggedInSP}
              />
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;
