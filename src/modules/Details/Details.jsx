import React from "react";
import MovieProfile from "./MovieProfile";
import ShowTimes from "./ShowTimes";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

export default function Details() {
  const { movieId } = useParams();

  return (
    <Box
      sx={{
        backgroundColor: "rgb(10, 32, 41)",
      }}
      pt={5}
    >
      <MovieProfile movieId={movieId} />
      <ShowTimes movieId={movieId} />
    </Box>
  );
}
