import React from "react";
import Banner from "./Banner";
import Showing from "./Showing";
import Cinema from "./Cinema";
import { Box } from "@mui/material";
import { CinemaMedia } from "./styledHome";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#262626",
      }}
    >
      <Banner />
      <Showing />
      <CinemaMedia id="cinema">
        <Cinema />
      </CinemaMedia>
    </Box>
  );
}
