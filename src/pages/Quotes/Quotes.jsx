import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";

function Quotes() {
  const data = async () => {
    // const [podaci, setPodaci] = useState([]);
    try {
      const url = await fetch("https://api.quotable.io/quotes?page=1");
      const data = await url.json();
      const results = data.results;
      return results;
    } catch (error) {
      console.log(error);
    }
  };
  data();
  return (
    <>
      <NewNavbar />
      <Card sx={{ width: 275, boxShadow: "0px 10px 20px 5px black" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Quotes;
