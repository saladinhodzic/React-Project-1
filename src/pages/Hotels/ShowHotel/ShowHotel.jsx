import { useParams } from "react-router-dom";
import Hotels from "../../../common/hotels.json";
import { NewNavbar } from "../../../components/NewNavbar/NewNavbar";
import { FaMapMarkerAlt, FaSwimmer } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
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
                <FaSwimmer className="icon" />
                Swimming pool
              </li>
              <li>Wi-Fi</li>
              <li>Locks on Card</li>
              <li>Free Parking</li>
              <li>Spa & Wellness</li>
            </ul>
            <div style={{ display: "flex" }}>
              <button>Reserve</button>
              <CiHeart className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
