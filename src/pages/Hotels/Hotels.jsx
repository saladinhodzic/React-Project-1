import hotels from "../../common/hotels.json";
import { Card } from "../../components/Card/Card";
import "./Hotels.css";

export function Catalog() {
  return (
    <div className="katalog">
      {hotels.map((value) => {
        return (
          <Card
            key={value["id"]}
            slika={value["imageUrl"]}
            hotelName={value["title"]}
            country={value["content"]}
            price={
              <>
                ${value["total"]} <del style={{ fontSize: "0.75em" }}>$569</del>
              </>
            }
            score={value["rating"]}
            reviews={425}
          />
        );
      })}
    </div>
  );
}
