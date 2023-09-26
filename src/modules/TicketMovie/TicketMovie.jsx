import React from "react";

import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import MovieList from "./MovieList";
import Ticket from "./Ticket";

export default function TicketMovie() {
  const { showtimeId } = useParams();

  return (
    <Box>
      <Container sx={{ paddingTop: "80px" }}>
        <Grid
          container
          spacing={2}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box
              sx={{ backgroundColor: "black", width: "30vw", height: "10px" }}
            ></Box>
            <Typography>Màn hình</Typography>
          </Grid>
          <Grid item xs={12}>
            <MovieList showtimeId={showtimeId} />
          </Grid>
          <Grid item xs={12}>
            <Ticket showtimeId={showtimeId} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
