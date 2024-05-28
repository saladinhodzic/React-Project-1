import "./Navbar.css";
export function Navbar() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <h1>SAKIley</h1>
        </div>
        <div className="listing">
          <ul>
            <li>Contact</li>
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
