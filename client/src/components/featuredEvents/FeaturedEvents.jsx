import "./featuredEvents.css";
import useFetch from "../../hooks/userFetch";
const FeaturedEvents = () => {
  const { data, loading, error } = useFetch("/event/countByType");
  return (
    <div className="fe">
      <div className="feItem">
        <img
          className="feImg"
          src="https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300"
          alt="img"
        ></img>
        <span className="feName">some fest</span>
        <span className="feCollege">some college</span>
        <span className="fePrice">some Price</span>
        <div className="feRating">
          <button>9</button>
          <span>Exc</span>
        </div>
      </div>
      <div className="feItem">
        <img
          className="feImg"
          src="https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300"
          alt="img"
        ></img>
        <span className="feName">some fest</span>
        <span className="feCollege">some college</span>
        <span className="fePrice">some Price</span>
        <div className="feRating">
          <button>9</button>
          <span>Exc</span>
        </div>
      </div>
      <div className="feItem">
        <img
          className="feImg"
          src="https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300"
          alt="img"
        ></img>
        <span className="feName">some fest</span>
        <span className="feCollege">some college</span>
        <span className="fePrice">some Price</span>
        <div className="feRating">
          <button>9</button>
          <span>Exc</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
