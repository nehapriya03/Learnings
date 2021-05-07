import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetQuoteDataAPI } from "../apis/Quote";
import "../css/General.css";
import dog1 from "../assets/dog1.jpg";
import cat1 from "../assets/cat1.jpg";
import rabbit1 from "../assets/rabbit1.jpg";
import bird1 from "../assets/bird1.jpg";
import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";
import doc4 from "../assets/doc4.jpg";
import care1 from "../assets/care1.jpg";
import care2 from "../assets/care2.jpg";
import care3 from "../assets/care3.jpg";
import care4 from "../assets/care4.jpg";
import date1 from "../assets/date1.jpg";
import date2 from "../assets/date2.jpg";
import date3 from "../assets/date3.jpg";
import date4 from "../assets/date4.jpg";
import date5 from "../assets/date5.jpg";
import ngo1 from "../assets/ngo1.jpg";
import ngo2 from "../assets/ngo2.jpg";
import ngo3 from "../assets/ngo3.jpg";

const veterinaryDoctorImages = [doc1, doc2, doc3, doc4];
const caretakerImages = [care1, care2, care3, care4];
const dateAndMateImages = [date1, date2, date3, date4, date5];
const ngoImages = [ngo1, ngo2, ngo3];

const doctorSlider = () => {
  return veterinaryDoctorImages.map((image, index) => {
    return (
      <li key={index}>
        <img src={image} alt={`Doctor ${index}`} uk-cover={""} />
      </li>
    );
  });
};

const caretakerSlider = () => {
  return caretakerImages.map((image, index) => {
    return (
      <li key={index}>
        <img src={image} alt={`Caretaker ${index}`} uk-cover={""} />
      </li>
    );
  });
};

const dateAndMateSlider = () => {
  return dateAndMateImages.map((image, index) => {
    return (
      <li key={index}>
        <img src={image} alt={`Date & Mate ${index}`} uk-cover={""} />
      </li>
    );
  });
};

const ngoSlider = () => {
  return ngoImages.map((image, index) => {
    return (
      <li key={index}>
        <img src={image} alt={`NGO ${index}`} uk-cover={""} />
      </li>
    );
  });
};

const HomePage = () => {
  const [doctorQuotes, setDoctorQuotes] = useState([]);
  const [ngoQuotes, setNgoQuotes] = useState([]);

  useEffect(() => {
    document.title = "Welcome to Philozooic";
    GetQuoteDataAPI("Doctor")
      .then(({ data: foundDoctorQuotes }) => {
        setDoctorQuotes(foundDoctorQuotes);
      })
      .catch((error) => {
        console.error(error);
      });
    GetQuoteDataAPI("NGO")
      .then(({ data: foundNGOQuotes }) => {
        setNgoQuotes(foundNGOQuotes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div
        className={"uk-position-relative uk-visible-toggle uk-light"}
        tabIndex={"-1"}
        uk-slideshow={
          "animation: fade; autoplay: true; autoplay-interval: 5000;"
        }
      >
        <ul
          className={"uk-slideshow-items"}
          uk-height-viewport={"offset-top: true"}
        >
          <li>
            <img src={cat1} uk-cover={""} alt={""} />
            <div
              className={
                "uk-position-center uk-position-small uk-text-center uk-light"
              }
            >
              <h2 className={"uk-margin-remove"}>Center</h2>
              <p className={"uk-margin-remove"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>
          <li>
            <img src={dog1} alt={""} uk-cover={""} />
            <div
              className={
                "uk-position-center uk-position-small uk-text-center uk-light"
              }
            >
              <h2 className={"uk-margin-remove"}>Center</h2>
              <p className={"uk-margin-remove"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>

          <li>
            <img src={bird1} alt={""} uk-cover={""} />
            <div
              className={
                "uk-position-center uk-position-small uk-text-center uk-light"
              }
            >
              <h2 className={"uk-margin-remove"}>Center</h2>
              <p className={"uk-margin-remove"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>

          <li>
            <img src={rabbit1} alt={""} uk-cover={""} />
            <div
              className={
                "uk-position-center uk-position-small uk-text-center uk-light"
              }
            >
              <h2 className={"uk-margin-remove"}>Center</h2>
              <p className={"uk-margin-remove"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>
        </ul>

        <div
          className={
            "uk-position-center-left uk-position-small uk-hidden-hover"
          }
          uk-slidenav-previous={""}
          uk-slideshow-item={"previous"}
        ></div>
        <div
          className={
            "uk-position-center-right uk-position-small uk-hidden-hover"
          }
          uk-slidenav-next={""}
          uk-slideshow-item={"next"}
        ></div>
      </div>

      {/* Veterinary Doctor */}
      <div className={"section"}>
        <div uk-grid={""}>
          <div className={"uk-width-1-2@l section-text"}>
            <h1 className={"heading-text"}>Veterinary Doctors</h1>
            <p>
              Philozooic has some of the best veterinary doctors available in
              your location. We have verified doctors and they provide
              absolutely the best services for your pets. We want your pet to be
              healthy and free of any problems.
              <br />
              You can view our list of doctors and check their information. To
              find a veterinary doctor for yourself, click below.
            </p>
            <Link to={"/doctor"} target={"_blank"}>
              <button className={"section-button"}>Veterinary Doctors</button>
            </Link>
          </div>
          <div className={"uk-width-1-2@l"}>
            <div
              className={"uk-position-relative uk-visible-toggle uk-light"}
              tabIndex="-1"
              uk-slideshow={
                "animation: fade; autoplay: true; autoplay-interval: 5000;"
              }
            >
              <ul className={"uk-slideshow-items"}>{doctorSlider()}</ul>
              <div
                className={
                  "uk-position-center-left uk-position-small uk-hidden-hover"
                }
                uk-slidenav-previous={""}
                uk-slideshow-item={"previous"}
              />
              <div
                className={
                  "uk-position-center-right uk-position-small uk-hidden-hover"
                }
                uk-slidenav-next={""}
                uk-slideshow-item={"next"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={"section"}>
        <div uk-grid={""}>
          <div className={"uk-width-1-2@l section-text"}>
            <h1 className={"heading-text"}>Caretakers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis
              odio non turpis eleifend ultricies. Fusce ut commodo nunc,
              imperdiet sodales nibh. Mauris lobortis, lorem non aliquet
              maximus, lectus ligula posuere erat, quis aliquet eros leo at ex.
              Maecenas scelerisque vestibulum purus, vel mollis purus dapibus
              et. Cras risus ipsum, consequat at bibendum faucibus, ullamcorper
              ac mauris. Integer vel metus eu massa ultrices tempus. Suspendisse
              potenti.
            </p>
            <Link to={"/caretaker"} target={"_blank"}>
              <button className={"section-button"}>Caretakers</button>
            </Link>
          </div>
          <div className={"uk-width-1-2@l"}>
            <div
              className={"uk-position-relative uk-visible-toggle uk-light"}
              tabIndex="-1"
              uk-slideshow={
                "animation: fade; autoplay: true; autoplay-interval: 5000;"
              }
            >
              <ul className={"uk-slideshow-items"}>{caretakerSlider()}</ul>
              <div
                className={
                  "uk-position-center-left uk-position-small uk-hidden-hover"
                }
                uk-slidenav-previous={""}
                uk-slideshow-item={"previous"}
              />
              <div
                className={
                  "uk-position-center-right uk-position-small uk-hidden-hover"
                }
                uk-slidenav-next={""}
                uk-slideshow-item={"next"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={"section"}>
        <div uk-grid={""}>
          <div className={"uk-width-1-2@l section-text"}>
            <h1 className={"heading-text"}>Dating & Mating</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis
              odio non turpis eleifend ultricies. Fusce ut commodo nunc,
              imperdiet sodales nibh. Mauris lobortis, lorem non aliquet
              maximus, lectus ligula posuere erat, quis aliquet eros leo at ex.
              Maecenas scelerisque vestibulum purus, vel mollis purus dapibus
              et. Cras risus ipsum, consequat at bibendum faucibus, ullamcorper
              ac mauris. Integer vel metus eu massa ultrices tempus. Suspendisse
              potenti.
            </p>
            <Link to={"/date-mate"} target={"_blank"}>
              <button className={"section-button"}>Date & Mate</button>
            </Link>
          </div>
          <div className={"uk-width-1-2@l"}>
            <div
              className={"uk-position-relative uk-visible-toggle uk-light"}
              tabIndex="-1"
              uk-slideshow={
                "animation: fade; autoplay: true; autoplay-interval: 5000;"
              }
            >
              <ul className={"uk-slideshow-items"}>{dateAndMateSlider()}</ul>
              <div
                className={
                  "uk-position-center-left uk-position-small uk-hidden-hover"
                }
                uk-slidenav-previous={""}
                uk-slideshow-item={"previous"}
              />
              <div
                className={
                  "uk-position-center-right uk-position-small uk-hidden-hover"
                }
                uk-slidenav-next={""}
                uk-slideshow-item={"next"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={"section"}>
        <div uk-grid={""}>
          <div className={"uk-width-1-2@l section-text"}>
            <h1 className={"heading-text"}>NGOs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis
              odio non turpis eleifend ultricies. Fusce ut commodo nunc,
              imperdiet sodales nibh. Mauris lobortis, lorem non aliquet
              maximus, lectus ligula posuere erat, quis aliquet eros leo at ex.
              Maecenas scelerisque vestibulum purus, vel mollis purus dapibus
              et. Cras risus ipsum, consequat at bibendum faucibus, ullamcorper
              ac mauris. Integer vel metus eu massa ultrices tempus. Suspendisse
              potenti.
            </p>
            <Link to={"/ngo"} target={"_blank"}>
              <button className={"section-button"}>NGO</button>
            </Link>
          </div>
          <div className={"uk-width-1-2@l"}>
            <div
              className={"uk-position-relative uk-visible-toggle uk-light"}
              tabIndex="-1"
              uk-slideshow={
                "animation: fade; autoplay: true; autoplay-interval: 5000;"
              }
            >
              <ul className={"uk-slideshow-items"}>{ngoSlider()}</ul>
              <div
                className={
                  "uk-position-center-left uk-position-small uk-hidden-hover"
                }
                uk-slidenav-previous={""}
                uk-slideshow-item={"previous"}
              />
              <div
                className={
                  "uk-position-center-right uk-position-small uk-hidden-hover"
                }
                uk-slidenav-next={""}
                uk-slideshow-item={"next"}
              />
            </div>
          </div>
        </div>
      </div>
      {doctorQuotes.length > 0 && (
        <>
          <h2 className={"quote-heading-text"}>Doctor Quotes</h2>
          <div
            className={"uk-position-relative uk-visible-toggle uk-light"}
            tabIndex={"-1"}
            uk-slideshow={"max-height: 250; autoplay: true"}
          >
            <ul className={"uk-slideshow-items"}>
              {doctorQuotes.map((doctorQuote, index) => {
                return (
                  <li key={doctorQuote.quoteId}>
                    <div className={"uk-position-cover"} />
                    <div className={"uk-position-cover"} />
                    <div
                      className={
                        "uk-position-center uk-position-medium uk-text-center"
                      }
                    >
                      <div className={"quote-card"}>
                        <h2>{doctorQuote.quoteString}</h2>
                        <p>
                          - Dr. {doctorQuote?.quotedBy?.[0]?.firstName}{" "}
                          {doctorQuote?.quotedBy?.[0]?.lastName}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div
              className={
                "uk-position-center-left uk-position-small uk-hidden-hover nav-arrow"
              }
              uk-slidenav-previous={""}
              uk-slideshow-item={"previous"}
            />
            <div
              className={
                "uk-position-center-right uk-position-small uk-hidden-hover nav-arrow"
              }
              uk-slideshow-item={"next"}
            />
          </div>
        </>
      )}

      {ngoQuotes.length > 0 && (
        <>
          <h2 className={"quote-heading-text"}>NGO Quotes</h2>
          <div
            className={"uk-position-relative uk-visible-toggle uk-light"}
            tabIndex={"-1"}
            uk-slideshow={"max-height: 250; autoplay: true"}
          >
            <ul className={"uk-slideshow-items"}>
              {ngoQuotes.map((ngoQuote, index) => {
                return (
                  <li key={ngoQuote.quoteId}>
                    <div className={"uk-position-cover"} />
                    <div className={"uk-position-cover"} />
                    <div
                      className={
                        "uk-position-center uk-position-medium uk-text-center"
                      }
                    >
                      <div className={"quote-card"}>
                        <h2>{ngoQuote.quoteString}</h2>
                        <p>- NGO: {ngoQuote?.quotedBy?.[0]?.name}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div
              className={
                "uk-position-center-left uk-position-small uk-hidden-hover nav-arrow"
              }
              href="#"
              uk-slidenav-previous={""}
              uk-slideshow-item={"previous"}
            />
            <div
              className={
                "uk-position-center-right uk-position-small uk-hidden-hover nav-arrow"
              }
              uk-slidenav-next={""}
              uk-slideshow-item={"next"}
            />
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
