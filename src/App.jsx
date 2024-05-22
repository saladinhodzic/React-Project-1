import { useState } from "react";
import "./App.css";
import MySentence from "./components/MySentence/MySentence";
import { Greetings } from "./components/Greetings/Greetings";

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
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // const [seconds, setTimer] = useState(60);

  const reverseArr = () => {
    const newArr = [...arr];
    newArr.reverse();
    setArr(newArr);
  };

  // const osoba = {
  //   name: "Jakub",
  //   age: 17,
  // };

  // // destructuring objects

  // const { name } = osoba;
  // console.log(name);

  // setCount((prevValue) => prevValue++); NIJE KOREKTNO

  return (
    // React fragment
    <>
      <Greetings appName="Sakiley" name="Saladin" />
      <div className="card">
        {/* <h1 className="timer">{timer(seconds)}</h1> */}
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => reverseArr()}>Zameni redosled</button>
      {arr.map((value, index) => {
        return (
          <div key={index}>
            <p>{value}</p>
            <MySentence />
          </div>
        );
      })}
    </>
  );
}

export default App;
