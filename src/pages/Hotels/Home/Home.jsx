import { NavLink } from "react-router-dom";
import { Footer } from "../../../components/Footer/Footer";
export default function Home(props) {
  return (
    <>
      <header>
        <div className="wrapper">
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
                to={"/apartmens"}
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink"
                }
              >
                <li>Apartmens</li>
              </NavLink>
              <NavLink
                to={"/about-us"}
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink"
                }
              >
                <li>About us</li>
              </NavLink>
              <NavLink
                to={"/teams"}
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink"
                }
              >
                <li>Teams</li>
              </NavLink>
            </ul>
            <button>Log in</button>
          </div>

          <div className="slogan">
            <h1>Find your next stay</h1>
            <h2>
              Search lowest prices on <a href="/hotels">hotels</a>, motels and
              so much more...
            </h2>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}
