import "./Card.css";
import infoLogo from "../../assets/info.svg";
export function Card(props) {
  return (
    <div className="card">
      <div className="img">
        <img src={props.slika} />
      </div>
      <div className="tekst">
        <p>
          <strong>{props.score}/10</strong> Exceptional (425 reviews)
        </p>
        <div className="ime">
          <h2>{props.hotelName}</h2>
          <p>{props.country}</p>
        </div>
        <div className="price">
          <div style={{ display: "flex", alignItems: "center", gap: "0.25em" }}>
            <h2>${props.price}</h2>
            <img src={infoLogo} className="info-logo" />
          </div>
          <p>per night</p>
        </div>
        <div className="button">Member Price available</div>
      </div>
    </div>
  );
}
