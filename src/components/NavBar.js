import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import philozooic from "../assets/philozooic.png";

const NavBar = (props) => {
  const { user } = props;

  const showAuthPart = () => {
    if (user === null || user === undefined) {
      return (
        <li>
          <Link to={"/login"}>
            <a>Login</a>
          </Link>
        </li>
      );
    }
    return (
      <li>
        <a>{`Hi, ${user.name}`}</a>
      </li>
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
          <div className={"uk-container uk-container-expand"} className={"navbar-cont"}>
            <div uk-navbar={""} className={"navbar"}>
              <div className={"uk-navbar-item logo-image-box"}>
                <img
                  src={philozooic}
                  className={"logo-img"}
                  alt={"Philozooic Logo"}
                />
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
                {showAuthPart()}
                <li>
                  <Link to={"/about-us"}>
                    <a>About Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
