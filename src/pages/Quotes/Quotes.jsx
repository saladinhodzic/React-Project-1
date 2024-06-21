import "./Quotes.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import quotes from "../../common/quotes.json";
// import { useEffect, useState } from "react";

function Quotes() {
  // const [podaci, setPodaci] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.quotable.io/quotes?page=1")
  //     .then((url) => {
  //       return url.json();
  //     })
  //     .then((data) => {
  //       setPodaci(data.results);
  //     });
  // }, []);
  // console.log(podaci);
  return (
    <>
      <NewNavbar />
      <div className="quotes">
        {quotes.map((value) => {
          return (
            <Card sx={{ width: 275, boxShadow: "0px 10px 20px 5px black" }}>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {value.author}
                </Typography>
                <Typography variant="body3">*{value.content}</Typography>
                <Typography sx={{ mb: 1.5 }}>{value.year}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Quotes;
