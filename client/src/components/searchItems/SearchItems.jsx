import { Link } from "react-router-dom";
import "./searchItems.css";
const SearchItems = ({ item }) => {
  return (
    <div className="container">
      <div className="searchItem ">
        <img
          src={
            item.photos[0] ||
            "https://images.herzindagi.info/image/2022/Oct/tourist-places-to-visit-in-pune.jpg"
          }
          alt="img"
          className="siImage"
        />
        <div className="siDesc">
          <h1 className="siTitle">
            <b>{item.title}</b>
          </h1>
          <span className="siCollege">
            <b>{item.college}</b>
          </span>
          <span className="siCity">
            <b>{item.city}</b>
          </span>
          <span className="siSubtitle">Additional attraction of fest</span>
          <span className="siFeatures">descripton about venue</span>
          <span className="siCancelOp">Free cancellatioin</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating"></div>
          <div className="siDetailTexts">
            <Link to={`/events/${item._id}`}>
              <button className="siCheckButton btn btn-outline-secondary">
                ₹{item.price == null ? 0 : item.price}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
