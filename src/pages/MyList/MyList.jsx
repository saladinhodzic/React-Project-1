import { niz } from "../ShowHotel/ShowHotel";
console.log(niz);
export function MyList() {
  return (
    <>
      {niz.map((value) => {
        <p>{value}</p>;
      })}
    </>
  );
}
