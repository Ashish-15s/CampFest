import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me"></i>CampFest
              </h6>
              <p>
                CampFest is the place to explore college fests. It also provides
                a single platform to promote college fests and makes it easy to
                reach wider audiences.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <p>
                <a href="#cards_landscape_wrap-2" className="text-reset">
                  Browse by city
                </a>
              </p>
              <p>
                <a
                  href="#cards_landscape_wrap-2EventList"
                  className="text-reset"
                >
                  Browse by type
                </a>
              </p>
              <p>
                <a href="#featuredEvents" className="text-reset">
                  Featured fests
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me"></i> Jaipur, Rajasthan, India
              </p>
              <p>
                <i className="fas fa-envelope me"></i>
                <a href="https://github.com/Ashish-15s" target="_blank">
                  Github
                </a>
              </p>
              <p>
                <i className="fas fa-phone "></i>
                <a
                  href="https://linkedin.com/in/ashish-sharma-588a36222"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        // style="background-color: rgba(0, 0, 0, 0.05);"
      ></div>
    </div>
  );
};

export default Footer;
