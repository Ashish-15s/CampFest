import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.css";
import EventList from "../../components/eventList/EventList";
import FeaturedEvents from "../../components/featuredEvents/FeaturedEvents";
import MailList from "../../components/mailList/MailList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h4 className="homeTitle">
          <b> Browse by fest type</b>
        </h4>
        <EventList />
        <h4 className="homeTitle">
          <b>Featured Fest</b>{" "}
        </h4>
        <FeaturedEvents />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
