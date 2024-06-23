import "./Quotes.css";
import { QuoteCard } from "../../components/QuoteCard/QuoteCard";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(null);

  async function getQuotes() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.quotable.io/quotes?limit=16&page=${page}&sortBy=author&order=asc`
      );
      const result = await response.json();
      setCount(result.totalPages);
      setQuotes(result.results);
      console.log(result);
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
      <div className={isLoading ? "quotes-is-loading" : "quotes"}>
        {isLoading ? (
          <Box sx={{ display: "flex" }}>
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
      {!isLoading && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={count}
            style={{ backgroundColor: "#fff", borderRadius: "1em" }}
            color="primary"
          />
        </Box>
      )}
    </>
  );
}

export default Quotes;
