import "./TeamCard.css";
import { useState, useEffect } from "react";
export function TeamCard({
  name,
  id,
  points,
  extended,
  setExtended,
  onclick,
  wins,
  draws,
  matches,
}) {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    if (extended !== null && extended !== id) {
      setClosed(true);
    }
  }, [extended, id]);

  useEffect(() => {
    if (!closed) {
      setExtended(id);
    } else {
      setExtended(null);
    }
  }, [closed, id]);

  // const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="team-card" style={{ height: !closed ? "150px" : "80px" }}>
      <h2 className="h2">{name}</h2>
      <p className="p">{points}</p>
      <p className="p">{matches}</p>
      <p className="p">{wins}</p>
      <p className="p">{draws}</p>
      <p className="p">
        <button onClick={onclick}>Remove</button>
      </p>
      <p className="p">
        <button onClick={() => setClosed(!closed)} className="show">
          {!closed ? "Show less" : "Show more"}
        </button>
      </p>
      {/* {closed ? (
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
      {!closed && (
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
