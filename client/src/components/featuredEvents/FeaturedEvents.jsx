import "./featuredEvents.css";
import useFetch from "../../hooks/userFetch";
import { Link } from "react-router-dom";
const FeaturedEvents = () => {
  const { data, loading, error } = useFetch("/event?featured=true");
  return (
    <div className="fe">
      {loading ? (
        "loading"
      ) : (
        <>
          <h1>Explore Our Curated Featured Events</h1>
          <h5>Experience the Best of Campus Life with CampFest</h5>
          <div className="container fcontainer" id="featuredEvents">
            <div className="row">
              {data.map((item) => (
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="fcard card">
                    <img
                      className="card-image"
                      src={
                        item.photos[0] ||
                        "https://tourscanner.com/blog/wp-content/uploads/2022/07/fun-and-unusual-things-to-do-in-Mumbai.jpg"
                      }
                    />

                    <h2>{item.title}</h2>
                    <p>
                      {item.desc ||
                        `This event is organized by ${item.organizer} in ${item.college}. Contact organizer for more details about the fest`}
                    </p>

                    <Link to={`/events/${item._id}`}>{item.price}₹</Link>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedEvents;
