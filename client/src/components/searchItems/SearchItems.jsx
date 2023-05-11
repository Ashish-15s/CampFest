import "./searchItems.css";
const SearchItems = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300"
        alt="img"
        className="siImage"
      />
      <div className="siDesc">
        <h1 className="siTitle">Fest Name</h1>
        <span className="siCollege">College Name</span>
        <span className="siCity">City Name</span>
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
          <button>9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$ 99</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
