import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItems from "../../components/searchItems/SearchItems";
import "./list.css";
import useFetch from "../../hooks/userFetch";
import Footer from "../../components/footer/Footer";

const List = () => {
  const fest = useLocation();
  const [festName, setFestName] = useState(fest.state.festName);
  const [collegeName, setCollegeName] = useState(fest.state.collegeName);
  const [cityName, setCityName] = useState(fest.state.cityName);

  var url = `event/?title=${festName}&college=${collegeName}&city=${cityName}`;

  festName === ""
    ? collegeName === ""
      ? (url = `event/?city=${cityName}`)
      : cityName === ""
      ? (url = url = `event/?college=${collegeName}`)
      : (url = `event/?college=${collegeName}&city=${cityName}`)
    : collegeName === ""
    ? cityName === ""
      ? (url = `event/?title=${festName}`)
      : (url = `event/?title=${festName}&city=${cityName}`)
    : cityName === ""
    ? (url = `event/?title=${festName}&college=${collegeName}`)
    : (url = `event/?title=${festName}&college=${collegeName}&city=${cityName}`);
  const { data, loading, error, reFetch } = useFetch(url);
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar type="list" />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Event</label>
              <input
                type="text"
                placeholder={festName}
                onChange={(e) => setFestName(e.target.value)}
              ></input>
            </div>
            <div className="listItem">
              <label>College</label>
              <input
                type="text"
                placeholder={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              ></input>
            </div>
            <div className="listItem">
              <label>City</label>
              <input
                type="text"
                placeholder={cityName}
                onChange={(e) => setCityName(e.target.value)}
              ></input>
            </div>
            <button onClick={handleClick} className="btn btn-outline-secondary">
              Search
            </button>
          </div>

          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItems item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
