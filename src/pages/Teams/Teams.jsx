import { TeamCard } from "../../components/TeamCard/TeamCard";
import teams from "../../common/teams.json";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { useState, useEffect } from "react";
import "./Teams.css";

export default function Teams() {
  const [list, setList] = useState(teams);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setList(list.slice(0, 1));
    }
  }, [isClicked]);

  return (
    <>
      <NewNavbar />
      <div className="list">
        {list.map((value, index) => {
          return (
            <TeamCard
              key={index}
              name={value["team_name"]}
              points={`${value["points"]}pts`}
              wins={value.wins}
              loses={value.loses}
              draws={value.draws}
              matches={value.matches_played}
              onclick={() => setIsClicked(true)}
            />
          );
        })}
      </div>
    </>
  );
}
