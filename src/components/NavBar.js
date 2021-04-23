import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import philozooic from "../assets/philozooic.png";

const NavBar = (props) => {
  const { user, setUser, selectedNav, setSelectedNav } = props;

  const showAuthPart = () => {
    if (user === null || user === undefined) {
      return (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      );
    }
    return (
      <>
        <li>
          <a>{`Hi, ${user.name.split(" ")[0]}`}</a>
        </li>
        <li>
          <a
            onClick={() => {
              localStorage.clear();
              setUser(null);
            }}
          >
            Logout
          </a>
        </li>
      </>
    );
  };

  return (
    <div className={"uk-section-primary uk-preserve-color"}>
      <div
        uk-sticky={
          "animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200"
        }
      >
        <nav className={"uk-navbar-container"}>
          <div className={"uk-container uk-container-expand navbar-cont"}>
            <div uk-navbar={""} className={"navbar"}>
              <div className={"uk-navbar-item logo-image-box"}>
                <Link to={"/"}>
                  <img
                    src={philozooic}
                    className={"logo-img"}
                    alt={"Philozooic Logo"}
                  />
                </Link>
              </div>
              <div className={"uk-navbar-item search-box-div"}>
                <form className={"uk-search uk-search-navbar"}>
                  <span uk-search-icon={""}></span>
                  <input
                    className={"uk-search-input search-box"}
                    type={"search"}
                    placeholder={"Search"}
                  />
                </form>
              </div>
              <ul className={"uk-navbar-nav"}>
                <li
                  className={`${selectedNav === "ABOUT" ? "uk-active" : null}`}
                >
                  <Link
                    to={"/about-us"}
                    onClick={() => setSelectedNav("ABOUT")}
                  >
                    About Us
                  </Link>
                </li>
                {showAuthPart()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
