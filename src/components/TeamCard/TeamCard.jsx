export function TeamCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.points}</p>
      <p>{props.matches}</p>
      <p>{props.wins}</p>
      <p>{props.draws}</p>
      <p>{props.loses}</p>
    </div>
  );
}
