import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./event.css";

const Event = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    { src: "https://cdn.20m.es/img/2009/10/07/1008300.jpg" },
    {
      src: "https://cdn.dribbble.com/users/6570629/screenshots/15511980/media/a48e4d758239559dd5c53b14b470a40e.png?compress=1&resize=400x300&vertical=top",
    },
    { src: "https://cdn.20m.es/img/2009/10/07/1008300.jpg" },
    {
      src: "https://cdn.dribbble.com/users/6570629/screenshots/15511980/media/a48e4d758239559dd5c53b14b470a40e.png?compress=1&resize=400x300&vertical=top",
    },
    { src: "https://cdn.20m.es/img/2009/10/07/1008300.jpg" },
    {
      src: "https://cdn.dribbble.com/users/6570629/screenshots/15511980/media/a48e4d758239559dd5c53b14b470a40e.png?compress=1&resize=400x300&vertical=top",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="eventContainer">
        {/* slider */}
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                className="sliderImg"
                alt="img"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        {/* slider end */}

        <div className="eventWrapper">
          <button className="registerNow">Register Now</button>
          <h1 className="eventTitle"> Event Title</h1>
          <div className="evenAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>some address </span>
          </div>
          <span className="eventCollege">some college </span>
          <span className="eventPriceHighlight">
            something about price of event
          </span>
          <div className="eventImages">
            {photos.map((photo, i) => (
              <div className="eventImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt="img "
                  className="eventImg"
                ></img>
              </div>
            ))}
          </div>
          <div className="eventDetails">
            <div className="eventDetailsText">
              <h1 className="eventTitle">Title of event</h1>
              <p className="eventDesc">
                Kazakhstan greatest country in the world. All other countries
                are run by little girls. Kazakhstan number one exporter of
                potassium. Other countries have inferior potassium. Kazakhstan
                home of Tinshein swimming pool. Its length thirty meter and
                width six meter. Filtration system a marvel to behold. It remove
                80 percent of human solid waste. Kazakhstan, Kazakhstan you very
                nice place. From Plains of Tarashek to Norther fence of Jewtown.
                Kazakhstan friend of all except Uzbekistan. They very nosey
                people with bone in their brain. Kazakhstan industry best in the
                world. We incented toffee and trouser belt. Kazakhstans
                prostitutes cleanest in the region. Except of course
                Turkmenistans Kazakhstan, Kazakhstan you very nice place. From
                Plains of Tarashek to Norther fence of Jewtown. Come grasp the
                might penis of our leader. From junction with the testes to tip
                of its face!
              </p>
            </div>
            <div className="eventDetailsPrice">
              <h2>
                <b>$99</b>
              </h2>
              <button>Register Now</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </div>
  );
};

export default Event;
