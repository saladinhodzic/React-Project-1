import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import hotel from "./assets/hotel.jpg";
import hotel2 from "./assets/hotel2.jpg";
import hotel3 from "./assets/hotel3.jpg";
import hotel4 from "./assets/hotel4.jpg";

// timer(50);
// console.log(timer(time));

// const timer = (time) => {
//   let interval;
//   interval = setInterval(() => {
//     time--;
//     console.log(time);
//   }, 1000);
// };
function App() {
  // const [count, setCount] = useState(0);
  // const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // const [seconds, setTimer] = useState(60);

  // const reverseArr = () => {
  //   const newArr = [...arr];
  //   newArr.reverse();
  //   setArr(newArr);
  // };

  // const osoba = {
  //   name: "Jakub",
  //   age: 17,
  // };

  // // destructuring objects

  // const { name } = osoba;
  // console.log(name);

  // setCount((prevValue) => prevValue++); NIJE KOREKTNO

  return (
    <div className="katalog">
      <Card
        slika={hotel}
        hotelName="Grand Ho Tram"
        country="Vietnam"
        price={
          <>
            $259 <del>$569</del>
          </>
        }
        score={9.3}
        reviews={425}
      />
      <Card
        slika={hotel2}
        hotelName="Margaritaville"
        country="Philipines"
        price={
          <>
            $99 <del>$159</del>
          </>
        }
        score={8.5}
        reviews={365}
      />
      <Card
        slika={hotel2}
        hotelName="Margaritaville"
        country="Philipines"
        price={
          <>
            $99 <del>$159</del>
          </>
        }
        score={8.5}
        reviews={365}
      />

      <Card
        slika={hotel4}
        hotelName="Titanic Ship"
        country="Sweden"
        price={
          <>
            $179 <del>$369</del>
          </>
        }
        score={7.9}
        reviews={2008}
      />
    </div>
    // <Greetings appName="Sakiley" name="Saladin" />
    // React fragment
    // <>
    //   <div className="card">
    //     {/* <h1 className="timer">{timer(seconds)}</h1> */}
    //     <p>{count}</p>
    //     <button onClick={() => setCount(count - 1)}>decrease</button>
    //     <button onClick={() => setCount(count + 1)}>increase</button>
    //   </div>

    //   <button onClick={() => reverseArr()}>Zameni redosled</button>
    //   {arr.map((value, index) => {
    //     return (
    //       <div key={index}>
    //         <p>{value}</p>
    //         <MySentence />
    //       </div>
    //     );
    //   })}
    // </>
  );
}

export default App;
