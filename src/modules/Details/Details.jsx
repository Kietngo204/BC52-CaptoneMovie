import React from "react";
import MovieProfile from "./MovieProfile";
import ShowTimes from "./ShowTimes";
import { useParams } from "react-router-dom";

export default function Details() {
  const { movieId } = useParams();
  console.log(movieId);

  return (
    <div
      style={{
        paddingTop: "64px",
        backgroundColor: "rgb(10, 32, 41)",
      }}
    >
      <MovieProfile movieId={movieId} />
      <ShowTimes movieId={movieId} />
    </div>
  );
}
