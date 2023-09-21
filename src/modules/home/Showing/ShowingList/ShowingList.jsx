import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getMovie } from "../../../../apis/movieAPI";
import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Desc, NameMovie } from "./stylesShowList";
import { ButtonMovie } from "../../../../components/ButtonMovie";
import { useNavigate } from "react-router-dom";

export default function ShowingList() {
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const { data: showing = [] } = useQuery({
    queryKey: ["showingList"],
    queryFn: getMovie,
  });
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
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
              <img
                width="100%"
                height="100%"
                src={item.hinhAnh}
                alt={item.tenPhim}
              />

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
      </Swiper>
    </>
  );
}
