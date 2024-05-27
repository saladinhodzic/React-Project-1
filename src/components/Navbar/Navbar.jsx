import "./Navbar.css";
export function Navbar() {
  return (
    <header>
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
    </header>
  );
}
