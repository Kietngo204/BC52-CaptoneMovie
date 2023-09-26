import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getMovie } from "../../../../apis/movieAPI";
import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Pagination } from "swiper/modules";

import { Desc, NameMovie } from "./stylesShowList";
import { ButtonMovie } from "../../../../components/ButtonMovie";
import { useNavigate } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ReactPlayer from "react-player";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "transparent",
};

export default function ShowingList() {
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const [open, setOpen] = useState(false);
  const [trailerMovie, setTrailerMovie] = useState("");

  const handleClose = () => setOpen(false);

  const { data: showing = [] } = useQuery({
    queryKey: ["showingList"],
    queryFn: getMovie,
  });
  const navigate = useNavigate();

  const handleOpen = (linkDemo) => {
    // setTrailerMovie(linkDemo.trailer);
    console.log(linkDemo);
    if (!linkDemo.trailer) {
      navigate(`/movies/${linkDemo.maPhim}`);
    }
    setOpen(true);
    setTrailerMovie(linkDemo.trailer);
  };

  return (
    <>
      <Swiper
        breakpoints={{
          576: { slidesPerView: 2, grid: { rows: 2 } },
          768: { slidesPerView: 3, grid: { rows: 2 } },
          992: { slidesPerView: 3, grid: { rows: 2 } },
          1200: { slidesPerView: 3, grid: { rows: 2 } },
          1400: { slidesPerView: 4, grid: { rows: 2 } },
        }}
        grid={{ rows: 2 }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {showing.map((item, index) => {
          const isHovered = index === hoveredSlide;
          return (
            <SwiperSlide
              onMouseEnter={() => {
                setHoveredSlide(index);
              }}
              onMouseLeave={() => {
                setHoveredSlide(null);
              }}
              key={item.maPhim}
              className="swiper-slide2"
            >
              <img src={item.hinhAnh} alt={item.tenPhim} />
              <Box
                onClick={() => handleOpen(item)}
                sx={{
                  backgroundColor: "#000000a7",
                  color: "#fff",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "80%",
                  zIndex: "1201",
                  opacity: "0",
                  borderRadius: "10px",
                  cursor: "pointer",

                  transition: "all 0.5s",

                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <PlayCircleOutlineIcon
                  fontSize="large"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.5s",
                    "&:hover": {
                      color: "#ffffff81",
                    },
                  }}
                />
              </Box>

              {isHovered ? (
                <ButtonMovie
                  margin="10px"
                  height="56px"
                  onClick={() => navigate(`/movies/${item.maPhim}`)}
                >
                  mua vé
                </ButtonMovie>
              ) : (
                <>
                  <NameMovie
                    pauseOnHover="true"
                    speed={30}
                    gradientWidth={200}
                    gradientColor={[211, 47, 47]}
                  >
                    {item.tenPhim}
                  </NameMovie>
                  <Desc>{item.moTa}</Desc>
                </>
              )}
            </SwiperSlide>
          );
        })}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ backgroundColor: "#0000001d" }}
        >
          <Box sx={style}>
            <ReactPlayer
              url={trailerMovie}
              width="60vw"
              height="60vh"
              controls={true}
            />
          </Box>
        </Modal>
      </Swiper>
    </>
  );
}
