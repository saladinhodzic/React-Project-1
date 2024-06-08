import { TeamCard } from "../../components/TeamCard/TeamCard";
import teams from "../../common/teams.json";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import "./Teams.css";

export default function Teams() {
  return (
    <>
      <NewNavbar />
      <div className="list">
        {teams.map((value, index) => {
          return (
            <TeamCard
              key={index}
              name={value["team_name"]}
              points={`${value["points"]}pts`}
              wins={value.wins}
              loses={value.loses}
              draws={value.draws}
              matches={value.matches_played}
            />
          );
        })}
      </div>
    </>
  );
}
