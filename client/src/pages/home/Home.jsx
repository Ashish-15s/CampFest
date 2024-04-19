import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.css";
import EventList from "../../components/eventList/EventList";
import FeaturedEvents from "../../components/featuredEvents/FeaturedEvents";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="headerImg">
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h4 className="homeTitle" />
          <EventList />
          <h4 className="homeTitle" />
          <FeaturedEvents />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
