import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCinema } from "../../../apis/cinemaAPI";
import { FlexFooter, LogoFooter } from "../styledFooter";
import { Box, Typography } from "@mui/material";
export default function FooterCinema() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["footerCinema"],
    queryFn: getCinema,
  });
  return (
    <FlexFooter>
      <Typography>HỆ THỐNG RẠP CHIẾU</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 120px)" }}>
        {data.map((item) => {
          return (
            <LogoFooter key={item.maHeThongRap}>
              <img
                src={item.logo}
                alt={item.tenHeThongRap}
                width="100%"
                height="100%"
                style={{ display: "inline-block" }}
              />
            </LogoFooter>
          );
        })}
      </Box>
    </FlexFooter>
  );
}
