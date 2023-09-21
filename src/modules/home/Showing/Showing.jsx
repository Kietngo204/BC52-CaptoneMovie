import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovie } from "../../../apis/movieAPI";
import Loading from "../../../components/Loading";
import ShowingList from "./ShowingList";
import { Container } from "@mui/material";
import ShowingSelect from "./ShowingSelect/ShowingSelect";

export default function Showing() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["showing"],
    queryFn: getMovie,
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="showing">
      <Container maxWidth="md" style={{ position: "relative", padding: "0" }}>
        <ShowingSelect movies={data} />
        <ShowingList />
      </Container>
    </div>
  );
}
