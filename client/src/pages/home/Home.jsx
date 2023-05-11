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
        <h1 className="homeTitle">Browse by fest type</h1>
        <EventList />
        <h1 className="homeTitle">Featured Fest</h1>
        <FeaturedEvents />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
