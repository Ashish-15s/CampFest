import useFetch from "../../hooks/userFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/event/countByCity?cities=jaipur,mumbai,delhi,pune"
  );

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div id="cards_landscape_wrap-2">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <a href="">
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box">
                          <img
                            src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-image-of-jaipur-in-march_22nd-nov.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text-container">
                          <h6>Jaipur</h6>
                          <p>{data[2]} College Fests</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <a href="">
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box">
                          <img
                            src="https://tourscanner.com/blog/wp-content/uploads/2022/07/fun-and-unusual-things-to-do-in-Mumbai.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text-container">
                          <h6>Mumbai</h6>
                          <p>{data[2]} College Fests</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <a href="">
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box">
                          <img
                            src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
                            alt=""
                          />
                        </div>

                        <div className="text-container">
                          <h6>Delhi</h6>
                          <p>{data[2]} College Fests</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <a href="">
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box">
                          <img
                            src="https://images.herzindagi.info/image/2022/Oct/tourist-places-to-visit-in-pune.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text-container">
                          <h6>Pune</h6>
                          <p>{data[2]} College Fests</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
