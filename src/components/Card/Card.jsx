import "./Card.css";
export function Card(props) {
  return (
    <div className="card">
      <div className="img">
        <img src={props?.slika} />
      </div>
      <div className="tekst">
        <p>
          <strong>{props.score}</strong> Exceptional ({props.reviews} reviews)
        </p>
        <div className="ime">
          <h2>{props.hotelName}</h2>
          <p>{props.country}</p>
        </div>
        <div className="price">
          <h2>{props?.price}</h2>
          <p style={{ textAlign: "start" }}>per night</p>
        </div>
        <div className="button">Member Price available</div>
      </div>
    </div>
  );
}
