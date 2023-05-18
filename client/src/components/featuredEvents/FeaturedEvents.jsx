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
          <div class="container-fluid">
            <div class="container">
              <div class="row">
                {data.map((item) => (
                  <div class="col-sm-3">
                    <div class="card card_red text-center">
                      <div class="title">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      </div>
                      <div class="price">
                        <h4>{item.title}</h4>
                      </div>
                      <div class="option">
                        <ul>
                          <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            {item.college}
                          </li>
                          <li>
                            <i class="fa fa-check" aria-hidden="true"></i>₹
                            {item.price}
                          </li>
                          <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            {item.rating}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedEvents;
