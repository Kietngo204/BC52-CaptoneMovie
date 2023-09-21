import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../../apis/movieAPI";
import { Grid, Container } from "@mui/material";
import dayjs from "dayjs";

import { ButtonMovie } from "../../../components/ButtonMovie";

export default function MovieProfile({ movieId }) {
  const { data: movieProfile = [], isLoading } = useQuery({
    queryKey: ["movieProfile"],
    queryFn: () => getMovieDetails(movieId),
  });
  console.log(movieProfile);
  const time = dayjs(movieProfile.ngayKhoiChieu).format("DD.MM.YYYY");
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={5}
        mb={5}
      >
        <Grid container direction="row" alignItems="center">
          <img
            src={movieProfile.hinhAnh}
            height={347}
            alt={movieProfile.tenPhim}
            style={{ borderRadius: "10px" }}
          />
          <Grid color="white" direction="column" ml={2}>
            <h4>{time}</h4>
            <h3>{movieProfile.tenPhim}</h3>
            <ButtonMovie height="35px">Mua vé</ButtonMovie>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
