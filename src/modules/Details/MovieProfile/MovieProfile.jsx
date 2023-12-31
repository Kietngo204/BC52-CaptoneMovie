import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../../apis/movieAPI";
import { Grid, Container, Box, Typography, Rating, Modal } from "@mui/material";
import dayjs from "dayjs";

import { ButtonMovie } from "../../../components/ButtonMovie";
import ReactPlayer from "react-player";

export default function MovieProfile({ movieId }) {
  const [value, setValue] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [trailerMovie, setTrailerMovie] = React.useState("");

  const handleClose = () => setOpen(false);

  const handleOpen = (linkDemo) => {
    if (!linkDemo) {
      alert("Link demo bị lỗi");
    }
    setOpen(true);
    setTrailerMovie(linkDemo);
  };

  const { data: movieProfile = [] } = useQuery({
    queryKey: ["movieProfile"],
    queryFn: () => getMovieDetails(movieId),
  });
  console.log(movieProfile);
  const time = dayjs(movieProfile.ngayKhoiChieu).format("DD.MM.YYYY");
  return (
    <>
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
            <ButtonMovie
              height="35px"
              onClick={() => {
                handleOpen(movieProfile.trailer);
              }}
            >
              Xem Trailer
            </ButtonMovie>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: "#0000001d" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "transparent",
            width: "75%",
            height: "75%",
          }}
        >
          <ReactPlayer
            url={trailerMovie}
            width="100%"
            height="100%"
            controls={true}
          />
        </Box>
      </Modal>
    </>
  );
}
