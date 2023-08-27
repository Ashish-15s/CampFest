import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./event.css";
import useFetch from "../../hooks/userFetch";
import { useLocation, useNavigate } from "react-router-dom";
import Reserve from "../../components/reserve/Reserve";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../components/footer/Footer";

const Event = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`/event/find/${id}`);
  const { user } = useContext(AuthContext);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleClick = () => {
    user ? setOpenModal(true) : navigate("/login");
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
      <Navbar type="list" />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
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
                  src={data.photos[slideNumber]}
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
            <button onClick={handleClick} className="registerNow">
              Register Now
            </button>
            <h1 className="eventTitle"> {data.title}</h1>
            <div className="eventAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.city} </span>
            </div>
            <span className="eventCollege">{data.college} </span>
            <span className="eventPriceHighlight">
              price for every individual {data.price} ₹
            </span>
            <div className="eventImages">
              {data.photos?.map((photo, i) => (
                <div className="eventImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt="img "
                    className="eventImg"
                  ></img>
                </div>
              ))}
            </div>
            <div className="eventDetails">
              <div className="eventDetailsText">
                <h1 className="eventTitle">{data.title}</h1>
                <p className="eventDesc">{data.desc}</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} eventId={id} />}
    </div>
  );
};

export default Event;
