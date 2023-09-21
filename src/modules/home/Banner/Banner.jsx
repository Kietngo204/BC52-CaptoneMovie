import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../../../apis/movieAPI";
import Loading from "../../../components/Loading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
export default function Banner() {
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {banners.map((banner) => {
        return (
          <SwiperSlide key={banner.maBanner}>
            <img width="100%" height="100%" src={banner.hinhAnh} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
