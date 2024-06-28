import { useState } from "react";
import "./App.css";
import hotel from "./assets/hotel.jpg";
import { Navbar } from "./components/Navbar/Navbar";
import { Naslov } from "./components/Naslov/Naslov";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/Hotels/Hotels";
import { NewNavbar } from "./components/NewNavbar/NewNavbar";
import { ShowHotel } from "./pages/ShowHotel/ShowHotel";
import Home from "./pages/Home/Home";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import { MyList } from "./pages/MyList/MyList";
import { Auth } from "./pages/Auth/Auth";

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
    <>
      <main className="main">
        {/* <Naslov title="Catalog" id="#catalog" /> */}
        {/* <div className="katalog">
          <Card
            slika={hotel}
            hotelName="Grand Ho Tram"
            country="Vietnam"
            price={
              <>
                $259 <del style={{ fontSize: "0.75em" }}>$569</del>
              </>
            }
            score={9.3}
            reviews={425}
          />
          {hotels.map((value) => {
            return (
              <Card
                key={value["id"]}
                slika={value["imageUrl"]}
                hotelName={value["title"]}
                country={value["content"]}
                price={
                  <>
                    ${value["total"]}{" "}
                    <del style={{ fontSize: "0.75em" }}>$569</del>
                  </>
                }
                score={value["rating"]}
                reviews={425}
              />
            );
          })}
        </div> */}
        <div className="hotels">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Catalog />} />
            <Route path="/hotels/:id" element={<ShowHotel />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/list" element={<MyList />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </main>
    </>

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
