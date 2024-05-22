import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MySentence from "./MySentence";

// timer(50);
// console.log(timer(time));

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // const [timer, setTimer] = useState(60);

  function timer(time) {
    let interval;
    interval = setInterval(() => {
      time = time - 1;
      console.log(time);
    }, 1000);
  }
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1 className="timer">{() => timer(50)}</h1>
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
