import "./Quotes.css";
import { QuoteCard } from "../../components/QuoteCard/QuoteCard";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getQuotes() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.quotable.io/quotes?limit=16&page=1&sortBy=author&order=asc"
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
        <Stack spacing={2}>
          <Pagination count={10} size="small" color="primary" />
        </Stack>
      </div>
    </>
  );
}

export default Quotes;
