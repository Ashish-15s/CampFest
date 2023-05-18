import "./eventList.css";
import useFetch from "../../hooks/userFetch";

const EventList = () => {
  const { data, loading, error } = useFetch("/event/countByType");
  const images = [
    "https://b2662075.smushcdn.com/2662075/wp-content/uploads/@2x-Blog-Technical-Skills-animation.gif?lossy=0&strip=1&webp=1",
    "https://thumbs.dreamstime.com/z/back-view-male-dj-college-fest-delhi-india-back-view-male-dj-college-fest-delhi-india-262016327.jpgg",
    "https://www.insidesport.in/wp-content/uploads/2020/04/aaa-1.jpg",
    "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/hansraj-college%2Cjpg00.jpg6566",
  ];
  return (
    <div className="eList">
      {loading ? (
        "loading"
      ) : (
        <>
          <div id="cards_landscape_wrap-2EventList">
            <div className="container">
              <div className="row">
                {data &&
                  images.map((img, i) => (
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <a href="">
                        <div className="card-flyer">
                          <div className="text-box">
                            <div className="image-box">
                              <img src={img} alt="" />
                            </div>
                            <div className="text-container">
                              <h6>{data[i]?.type}</h6>
                              <p>
                                {" "}
                                {data[i]?.count} {data[i]?.type}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default EventList;
