import { useParams } from "react-router-dom";
import { useState } from "react";
import Hotels from "../../common/hotels.json";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import {
  FaMapMarkerAlt,
  FaSwimmer,
  FaWifi,
  FaSpa,
  FaHeart,
} from "react-icons/fa";
import { CiHeart, CiLock, CiParking1 } from "react-icons/ci";
import "./ShowHotel.css";

export const niz = [];

export function ShowHotel() {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);

  // const hotel = Hotels.at(+id - 1);
  const hotel = Hotels.find((hotel) => hotel.id === Number(id));
  niz.push(hotel);

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
            <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
              <button>Reserve</button>
              {!isActive ? (
                <CiHeart
                  className="heart"
                  onClick={() => setIsActive(!isActive)}
                />
              ) : (
                <FaHeart
                  className="heart"
                  onClick={() => setIsActive(!isActive)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
