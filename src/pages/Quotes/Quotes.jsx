import "./Quotes.css";
import { QuoteCard } from "../../components/QuoteCard/QuoteCard";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

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
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getQuotes() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.quotable.io/quotes?limit=50&sortBy=author&order=asc"
      );
      const result = await response.json();
      setQuotes(result.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <NewNavbar />
      <div className="quotes">
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          quotes.map((value) => {
            return (
              <QuoteCard
                author={value.author}
                content={value.content}
                tags={value.tags[0]}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default Quotes;
