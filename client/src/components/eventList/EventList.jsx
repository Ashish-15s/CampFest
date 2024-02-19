import "./eventList.css";
import useFetch from "../../hooks/userFetch";

const EventList = () => {
  const { data, loading, error } = useFetch("/event/countByType");
  const images = [
    "https://b2662075.smushcdn.com/2662075/wp-content/uploads/@2x-Blog-Technical-Skills-animation.gif?lossy=0&strip=1&webp=1",
    "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://www.insidesport.in/wp-content/uploads/2020/04/aaa-1.jpg",
    "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  ];
  return (
    <div className="eList">
      {loading ? (
        "loading"
      ) : (
        <>
          <div id="cards_landscape_wrap-2EventList">
            <h1>Explore Fests by Type</h1>
            <h5>
              Dive into the Diversity of Campus Celebrations with CampFest!
            </h5>
            <div className="container">
              <div className="row">
                {data &&
                  images.map((img, i) => (
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <a href="#">
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
