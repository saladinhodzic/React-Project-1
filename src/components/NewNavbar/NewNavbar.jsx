import "./NewNavbar.css";
import { NavLink } from "react-router-dom";

export function NewNavbar() {
  return (
    <div className="new-header">
      <div className="logo">
        <NavLink to={"/"} className={"navlink"}>
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
    </div>
  );
}
