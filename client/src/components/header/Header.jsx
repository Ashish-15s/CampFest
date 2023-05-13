import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faTicket,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [festName, setFestName] = useState("");
  const [cityName, setCityName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { festName, cityName, collegeName },
    });
    navigate("/events", { state: { festName, collegeName, cityName } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faTicket} />
            <span>Explore Fest</span>{" "}
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTicket} />
            <span>Promote events</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTicket} />

            <span>Fest Tickets</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            {" "}
            <h1 className="headerTitle">CampFest</h1>
            <p className="headerDesc">One place to explore college fests</p>
            {!user && <button className="headerBtn">sign/register</button>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faTicket} />
                <input
                  type="text"
                  placeholder="Fest Name"
                  className="headerSearchInput"
                  onChange={(e) => setFestName(e.target.value)}
                ></input>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faUniversity} />
                <input
                  type="text"
                  placeholder="College"
                  className="headerSearchInput"
                  onChange={(e) => setCollegeName(e.target.value)}
                ></input>
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faLocation} />
                <input
                  type="text"
                  placeholder="City"
                  className="headerSearchInput"
                  onChange={(e) => setCityName(e.target.value)}
                ></input>
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
