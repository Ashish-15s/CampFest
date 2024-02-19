import useFetch from "../../hooks/userFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/event/countByCity?cities=jaipur,delhi,mumbai,pune"
  );

  const cities = [
    {
      city: "Jaipur",
      img: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-image-of-jaipur-in-march_22nd-nov.jpg",
    },
    {
      city: "Delhi",
      img: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
    },
    {
      city: "Mumbai",
      img: "https://tourscanner.com/blog/wp-content/uploads/2022/07/fun-and-unusual-things-to-do-in-Mumbai.jpg",
    },
    {
      city: "Pune",
      img: "https://images.herzindagi.info/image/2022/Oct/tourist-places-to-visit-in-pune.jpg",
    },
  ];

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div id="cards_landscape_wrap-2">
            <h1>Want to Explore College Fests in Your City?</h1>
            <h5>Don't Worry CampFest is the Place for You</h5>
            <div className="container">
              <div className="row">
                {data &&
                  cities.map((row, i) => (
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <div className="card-flyer">
                        <div className="text-box">
                          <div className="image-box">
                            <img src={row.img} alt="" />
                          </div>
                          <div className="text-container">
                            <h6>{row.city}</h6>
                            <p>{data[i]} College Fests</p>
                          </div>
                        </div>
                      </div>
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

export default Featured;
