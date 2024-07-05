import "./About.css";
import saki from "../../assets/saki.png";
import dzenan from "../../assets/dzenan.png";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { Footer } from "../../components/Footer/Footer";

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
      <div className="team">
        <div className="person">
          <img className="profilna" src={dzenan} alt="" width="20px" />
          <p className="person-name">Dzenan Kosuta</p>
          <p className="description">
            Graduiting graphic design was big step towards making my UI design
            looking as good as i can
          </p>
        </div>
        <div className="person">
          <img className="profilna" src={saki} alt="" width="20px" />
          <p className="person-name">Saladin Hodzic</p>
          <p className="description">
            Graduiting graphic design was big step towards making my UI design
            looking as good as i can
          </p>
        </div>
        <div className="person">
          <img className="profilna" src={saki} alt="" width="20px" />
          <p className="person-name">Saladin Hodzic</p>
          <p className="description">
            Graduiting graphic design was big step towards making my UI design
            looking as good as i can
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
