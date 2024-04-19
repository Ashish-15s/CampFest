import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const Reserve = ({ setOpen, eventId }) => {
  const [price, setPrice] = useState({});

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OkocZSJFM900B3ZpyfnAr5OLM9PBNUymwqKZX48gLMC5ypmQHTUdBjbHQ3mLRDh3mtOt4jgJVOmwKvrBWwblsGK004zPJjSN7"
    );
    console.log(JSON.stringify(price));
    const body = {
      products: price,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckoutSession({ sessionId: session.idx });
    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>
          <input
            placeholder="Enter no. of tickets"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit" className="btn5" onClick={makePayment}>
            {" "}
            Pay{" "}
          </button>
        </span>
      </div>
    </div>
  );
};
export default Reserve;
