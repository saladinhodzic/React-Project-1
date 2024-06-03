import { useParams } from "react-router-dom";
import Hotels from "../../../common/hotels.json";
import { NewNavbar } from "../../../components/NewNavbar/NewNavbar";
import "./ShowHotel.css";

export function ShowHotel() {
  const { id } = useParams();

  const hotel = Hotels.at(+id - 1);
  console.log(hotel);

  return (
    <>
      <NewNavbar />
      <div className="hotel">
        <div className="title">
          <h1>{hotel.title}</h1>
        </div>
        <>
          <img src={hotel.imageUrl} className="slika" />
        </>
      </div>
    </>
  );
}
