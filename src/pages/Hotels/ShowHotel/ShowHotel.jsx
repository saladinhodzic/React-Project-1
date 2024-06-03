import { useParams } from "react-router-dom";
import Hotels from "../../../common/hotels.json";

export function ShowHotel() {
  const { id } = +useParams();
  //   console.log(url);

  console.log(Hotels.includes(id));

  return <div></div>;
}
