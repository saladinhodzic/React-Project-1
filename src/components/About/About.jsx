import { FaInstagram, FaLinkedin } from "react-icons/fa";
export function AboutCard({ img, name, description }) {
  return (
    <div className="person">
      <img className="profilna" src={img} />
      <p className="person-name">{name}</p>
      <div className="description">
        <p>{description}</p>
        <div className="links">
          <FaInstagram className="link" />
          <FaLinkedin className="link" />
        </div>
      </div>
    </div>
  );
}
