import { TeamCard } from "../../components/TeamCard/TeamCard";
import teams from "../../common/teams.json";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { useState, useEffect } from "react";
import "./Teams.css";

export default function Teams() {
  const [list, setList] = useState(teams);
  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {
  //   if (isClicked) {
  //     const newList = list.filter((value, index) => value.onClick === false);
  //     setList(newList);
  //   }
  // }, [isClicked]);

  function removeItem(i) {
    const newList = list.filter((value, index) => index !== i);
    setList(newList);
  }

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
              onclick={() => removeItem(index)}
              // onclick={() => index}
            />
          );
        })}
      </div>
    </>
  );
}
