import "./Navbar.css";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink"
            }
          >
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
            <li>Your list</li>
            <li>Hotels & Motels</li>
            <li>Apartmens</li>
            <li>About us</li>
          </ul>
          <button>Log in</button>
        </div>
        <div className="slogan">
          <h1>Find your next stay</h1>
          <h2>Search lowest prices on hotels, motels and so much more...</h2>
        </div>
      </div>
    </header>
  );
}
