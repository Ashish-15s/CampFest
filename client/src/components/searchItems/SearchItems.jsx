import { Link } from "react-router-dom";
import "./searchItems.css";
const SearchItems = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="img" className="siImage" />
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>
        <span className="siCollege">{item.college}</span>
        <span className="siCity">{item.city}</span>
        <span className="siSubtitle">Additional attraction of fest</span>
        <span className="siFeatures">descripton about venue</span>
        <span className="siCancelOp">Free cancellatioin</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{item.price}</span>
          <Link to={`/events/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
