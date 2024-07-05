import "./About.css";
import saki from "../../assets/saki.png";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";

export function About() {
  return (
    <div className="about-us">
      <NewNavbar />
      <div className="naslov">
        <h2>
          SAKILEY.
          <br /> Together, We Make a Difference.
        </h2>
      </div>
      <div className="person">
        <img className="profilna" src={saki} alt="" width="20px" />
        <p className="ime">Saladin Hodzic</p>
        {/* <p className="description">
          Graduiting graphic design was big step towards making my UI design
          looking as good as i can
        </p> */}
      </div>
    </div>
  );
}
