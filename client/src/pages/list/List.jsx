import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItems from "../../components/searchItems/SearchItems";
import "./list.css";

const List = () => {
  const fest = useLocation();
  const [festName] = useState(fest.state.festName);
  const [collegeName] = useState(fest.state.collegeName);
  const [cityName] = useState(fest.state.cityName);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Event</label>
              <input type="text" placeholder={festName}></input>
            </div>
            <div className="listItem">
              <label>College</label>
              <input type="text" placeholder={collegeName}></input>
            </div>
            <div className="listItem">
              <label>City</label>
              <input type="text" placeholder={cityName}></input>
            </div>
            <button>Search</button>
          </div>

          <div className="listResult">
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
