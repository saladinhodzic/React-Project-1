import "./About.css";
import saki from "../../assets/saki.png";
import dzenan from "../../assets/dzenan.png";
import about from "../../common/about-us.json";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { Footer } from "../../components/Footer/Footer";
import { AboutCard } from "../../components/About/About";

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
        {about.map((value, index) => {
          return (
            <AboutCard
              key={index}
              img={value.img}
              name={value.name}
              description={value.description}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
