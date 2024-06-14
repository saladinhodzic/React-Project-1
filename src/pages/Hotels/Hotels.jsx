import hotels from "../../common/hotels.json";
import { Card } from "../../components/Card/Card";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { Pagination } from "../../components/Pagination/Pagination";
import "./Hotels.css";

export function Catalog() {
  // const { id } = useParams();
  return (
    <div className="hotels-cards">
      <NewNavbar />
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
                  ${value["total"]}{" "}
                  <del style={{ fontSize: "0.75em" }}>$569</del>
                </>
              }
              score={value["rating"]}
              reviews={425}
              onclick={() => (window.location.href = `/hotels/${value.id}`)}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}
