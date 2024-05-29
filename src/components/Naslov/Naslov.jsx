export function Naslov(props) {
  return (
    <h1
      id={props.id}
      style={{ textAlign: "left", paddingLeft: "1.5em", margin: "1em 0" }}
    >
      {props.title}
    </h1>
  );
}
