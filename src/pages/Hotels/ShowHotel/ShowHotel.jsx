import { useParams } from "react-router-dom";
import Hotels from "../../../common/hotels.json";
import { NewNavbar } from "../../../components/NewNavbar/NewNavbar";
import { FaMapMarkerAlt, FaSwimmer, FaWifi, FaSpa } from "react-icons/fa";
import { CiHeart, CiLock, CiParking1 } from "react-icons/ci";
import "./ShowHotel.css";

export function ShowHotel() {
  const { id } = useParams();

  const hotel = Hotels.at(+id - 1);

  return (
    <>
      <NewNavbar />
      <div className="hotel">
        <img src={hotel.imageUrl} className="slika" />
        <div className="title">
          <h1>{hotel.title}</h1>
          <div
            width={"50%"}
            style={{
              display: "flex",
              gap: "1em",
              height: "30%",
            }}
          >
            <FaMapMarkerAlt className="icon" />
            <h3>Trade Center, Dubai 117835, United Arab Emirates</h3>
          </div>
          <div className="sadrzaj">
            <h2>
              This hotel represents the essence of life combined with purity
            </h2>
            <ul>
              <li className="li">
                <FaSwimmer className="icons" />
                Swimming pool
              </li>
              <li className="li">
                <FaWifi className="icons" />
                Wi-Fi
              </li>
              <li className="li">
                <CiLock className="icons" />
                Locks on Card
              </li>
              <li className="li">
                <CiParking1 className="icons" />
                Free Parking
              </li>
              <li className="li">
                <FaSpa className="icons" />
                Spa & Wellness
              </li>
            </ul>
            <div style={{ display: "flex" }}>
              <button>Reserve</button>
              <CiHeart className="icons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
