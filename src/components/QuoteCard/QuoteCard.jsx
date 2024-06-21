import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export function QuoteCard({ content, author, tags }) {
  return (
    <Card sx={{ width: 275, boxShadow: "0px 10px 20px 5px black" }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body3">*{content}</Typography>
        <Typography sx={{ mb: 1.5 }}>{tags}</Typography>
      </CardContent>
    </Card>
  );
}
