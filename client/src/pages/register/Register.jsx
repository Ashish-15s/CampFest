import { useContext, useState } from "react";
import "./register.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const [error, setErr] = useState();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    try {
      const newUser = {
        ...info,
      };
      await axios.post("/auth/register", newUser);
      navigate("/login");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="register">
      {" "}
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <p className="text-white-50 mb-5">Please enter all details</p>
                  <div className="form-outline form-white mb-4">
                    <input
                      id="username"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="username"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="password"
                      minlength="4"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      id="email"
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      id="country"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="country"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      id="city"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="city"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    onClick={handleClick}
                  >
                    Sign Up
                  </button>{" "}
                  {error && (
                    <span className="errorMsg">
                      username or email already exists
                    </span>
                  )}
                </div>

                <div>
                  <p className="mb-0">
                    Already have an account?{" "}
                    <a href="/login" className="text-white-50 fw-bold">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
