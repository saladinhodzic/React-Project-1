import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

export function Navbar(props) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <NavLink to={""} className={"navlink"}>
            <h1>SAKIley</h1>
          </NavLink>
        </div>
        <div className="listing">
          <ul>
            <NavLink
              to={"/hotels"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"
              }
            >
              <li>Catalog</li>
            </NavLink>
            <NavLink
              to={"/list"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"
              }
            >
              <li>Your list</li>
            </NavLink>
            <NavLink
              to={"/quotes"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"
              }
            >
              <li>Quotes</li>
            </NavLink>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"
              }
            >
              <li>About us</li>
            </NavLink>
          </ul>
          <NavLink to={"/auth"}>
            <button onClick={logout}>Logout</button>
          </NavLink>
        </div>
      </div>
      <div className="slogan">
        <h1>Find your next stay</h1>
        <h2>Search lowest prices on hotels, motels and so much more...</h2>
      </div>
    </header>
  );
}
