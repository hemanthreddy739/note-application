import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink and useHistory from react-router-dom
import "../../css/Navbar.css"; // Import CSS file for styling
import { UserContext } from "../../context/UserContext";

function Navbar() {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("loggedInUser");
    if (token) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  function loginLogoutHandler() {
    if (loggedIn) {
      setLoggedIn(false);
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("notes");
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">Note@pp</div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "#BA8FFF" : "#fff",
                textDecoration: "none",
              };
            }}
          >
            PushNote
          </NavLink>
        </li>

        {loggedIn && (
          <li>
            <NavLink
              to="/allnotes"
              style={({ isActive, isPending }) => ({
                color: isActive ? "#BA8FFF" : "#fff",
                textDecoration: "none",
              })}
            >
              AllNotes
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            to="/login"
            onClick={loginLogoutHandler}
            style={({ isActive, isPending }) => ({
              color: isActive ? "#BA8FFF" : "#fff",
              textDecoration: "none",
            })}
          >
            {loggedIn ? "Logout" : "Login"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
