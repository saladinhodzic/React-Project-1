import "./TeamCard.css";
import { useState, useEffect } from "react";
export function TeamCard(props) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (showMore) {
    }
  }, [showMore]);
  return (
    <div className="team-card" style={{ height: showMore ? "150px" : "80px" }}>
      <h2 className="h2">{props.name}</h2>
      <p className="p">{props.points}</p>
      <p className="p">{props.matches}</p>
      <p className="p">{props.wins}</p>
      <p className="p">{props.draws}</p>
      <p className="p">
        <button onClick={() => setShowMore(!showMore)} className="show">
          {showMore ? "Show less" : "Show more"}
        </button>
      </p>
      {/* {showMore ? (
        <p className="p text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eveniet, sequi consectetur doloribus dicta eos! Iste obcaecati alias
          repudiandae asperiores quia quo nihil optio necessitatibus ipsa
          laudantium? Blanditiis sapiente nam maxime delectus eveniet totam
          dolorum? Iusto voluptatibus repellendus mollitia, delectus corrupti
          odio sapiente praesentium assumenda consequatur, aut quaerat rerum
          neque!
        </p>
      ) : null} */}
      {showMore && (
        <p className="p text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eveniet, sequi consectetur doloribus dicta eos! Iste obcaecati alias
          repudiandae asperiores quia quo nihil optio necessitatibus ipsa
          laudantium? Blanditiis sapiente nam maxime delectus eveniet totam
          dolorum? Iusto voluptatibus repellendus mollitia, delectus corrupti
          odio sapiente praesentium assumenda consequatur, aut quaerat rerum
          neque!
        </p>
      )}
    </div>
  );
}
