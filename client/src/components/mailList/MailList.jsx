import "./mailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Get Notify about Fests</h1>
      <span className="mailDesc">sign up to get informed about fests</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
