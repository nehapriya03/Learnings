import React, { useState } from "react";
import dog1 from "../assets/dog1.jpg";
import cat1 from "../assets/cat1.jpg";
import rabbit1 from "../assets/rabbit1.jpg";

const HomePage = () => {
  return (
    <div
      className={"uk-position-relative uk-visible-toggle uk-light"}
      tabindex={"-1"}
      uk-slideshow={"animation: fade; autoplay: true; autoplay-interval: 5000;"}
    >
      <ul
        className={"uk-slideshow-items"}
        uk-height-viewport={"offset-top: true"}
      >
        <li>
          <img src={cat1} uk-cover={""} alt={""} />
        </li>
        <li>
          <img src={dog1} alt={""} uk-cover={""} />
        </li>

        <li>
          <img src={rabbit1} alt={""} uk-cover={""} />
        </li>
      </ul>

      <a
        className={"uk-position-center-left uk-position-small uk-hidden-hover"}
        href={"#"}
        uk-slidenav-previous={""}
        uk-slideshow-item={"previous"}
      ></a>
      <a
        className={"uk-position-center-right uk-position-small uk-hidden-hover"}
        href={"#"}
        uk-slidenav-next={""}
        uk-slideshow-item={"next"}
      ></a>
    </div>
  );
};

export default HomePage;
