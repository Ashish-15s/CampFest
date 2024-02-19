import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Navbar = ({ type }) => {
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className={type === "list" ? "navbar listNavbar" : "navbar"}>
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="logo"> CampFest</span>
        </Link>
        {user ? (
          <div>
            <div className="userName"> {user.username}</div>

            <button
              onClick={handleClick}
              className="navButton btn btn-outline-secondary"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton btn btn-outline-secondary">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="navButton btn btn-outline-secondary">
                login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
