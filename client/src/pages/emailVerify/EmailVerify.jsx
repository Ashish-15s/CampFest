import { Fragment, useEffect, useState } from "react";
import "./emailVerify.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://campfest.onrender.com";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `${BASE_URL}/auth/${param.id}/verify/${param.token}`;
        console.log("t0");
        const { data } = await axios.get(url);
        console.log(data);
        console.log("t1");
        setValidUrl(true);
      } catch (error) {
        console.log("t2");
        console.log(error);

        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {validUrl ? (
        <div>
          <h1>Email verfied successfully</h1>

          <Link to="/login">
            <button className="emailVerifyButton btn btn-outline-dark btn-lg px-5">
              {" "}
              Login
            </button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;
