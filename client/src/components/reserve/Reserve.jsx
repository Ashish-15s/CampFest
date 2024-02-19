import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Reserve = ({ setOpen, eventId }) => {
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>
          <input placeholder="Enter no. of tickets"></input>
          <button type="submit" className="btn5">
            {" "}
            Pay{" "}
          </button>
        </span>
      </div>
    </div>
  );
};
export default Reserve;
