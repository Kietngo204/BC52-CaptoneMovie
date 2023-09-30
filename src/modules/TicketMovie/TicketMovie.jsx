import React from "react";

import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import MovieSeatList from "./MovieSeatList";
import Ticket from "./Ticket";

import { useQuery } from "@tanstack/react-query";
import { getTicketMovieBox } from "../../apis/ticketAPI";
import Loading from "../../components/Loading";
import TicketProvider from "../../contexts/TicketContext/TicketContext";

export default function TicketMovie() {
  const { showtimeId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["listBoxMovie"],
    queryFn: () => getTicketMovieBox(showtimeId),
    enabled: !!showtimeId,
  });

  if (isLoading) {
    return <Loading />;
  }
  const infoCinema = data?.thongTinPhim || [];
  const imageCinema = infoCinema?.hinhAnh || [];
  return (
    <TicketProvider>
      <Box
        sx={{
          backgroundImage: `url(${imageCinema})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",

          "&::after": {
            backgroundColor: "#00000080",
            display: "block",
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Container
          sx={{ paddingTop: "80px", zIndex: "100", position: "relative" }}
        >
          <Grid
            container
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{ backgroundColor: "#262626" }}
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
                sx={{ backgroundColor: "white", width: "30vw", height: "10px" }}
              ></Box>
              <Typography color={"white"}>Màn hình</Typography>
            </Grid>
            <Grid item xs={12} overflow={"hidden"}>
              <MovieSeatList showtimeId={showtimeId} />
            </Grid>
            <Grid item xs={12}>
              <Ticket showtimeId={showtimeId} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </TicketProvider>
  );
}
