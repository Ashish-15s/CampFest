import "./featuredEvents.css";
import useFetch from "../../hooks/userFetch";
const FeaturedEvents = () => {
  const { data, loading, error } = useFetch("/event?featured=true");
  return (
    <div className="fe">
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="feItem" key={item._id}>
              <img
                className="feImg"
                src="https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg?w=300"
                alt="img"
              ></img>
              <span className="feName">{item.title}</span>
              <span className="feCollege">{item.college}</span>
              <span className="fePrice">Price : {item.price}</span>
              {item.rating && (
                <div className="feRating">
                  <button>{item.rating}</button>
                  <span>Exc</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedEvents;
