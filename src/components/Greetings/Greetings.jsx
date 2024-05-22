import "./Greetings.css";

export function Greetings(props) {
  return (
    <div className="greeting-wrapper">
      <h1 className="greeting-title">Dobro dosli na {props.appName},</h1>
      <h2 className="greeting-subtitle">{props.name}</h2>
    </div>
  );
}
