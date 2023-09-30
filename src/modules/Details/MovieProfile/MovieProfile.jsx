import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../../apis/movieAPI";
import { Grid, Container, Box, Typography, Rating } from "@mui/material";
import dayjs from "dayjs";

import { ButtonMovie } from "../../../components/ButtonMovie";

export default function MovieProfile({ movieId }) {
  const [value, setValue] = React.useState(5);

  const { data: movieProfile = [], isLoading } = useQuery({
    queryKey: ["movieProfile"],
    queryFn: () => getMovieDetails(movieId),
  });

  const time = dayjs(movieProfile.ngayKhoiChieu).format("DD.MM.YYYY");
  return (
    <Container>
      <Grid container spacing={3} mt={5} mb={5}>
        <Grid item xs={6}>
          <img
            src={movieProfile.hinhAnh}
            height={347}
            width="100%"
            alt={movieProfile.tenPhim}
            style={{ borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={6} color={"white"}>
          <h4>{time}</h4>
          <h3>{movieProfile.tenPhim}</h3>
          <ButtonMovie height="35px">Mua vé</ButtonMovie>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Đánh giá</Typography>
            <Rating
              defaultValue={5}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              readOnly={true}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
