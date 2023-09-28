import { Box, Typography } from "@mui/material";
import React from "react";
import { FlexFooter, TextLinkFooter } from "../styledFooter";

export default function FooterBuyTicket() {
  const data = [
    "Lịch chiếu phim",
    "Rạp chiếu phim",
    "Phim chiếu rạp",
    "Review phim",
    "Top phim",
    "Blog phim",
  ];
  return (
    <FlexFooter>
      <Typography>MUA VÉ XEM PHIM</Typography>
      {data.map((item, index) => {
        return (
          <TextLinkFooter to={"/"} key={index} mt="12px">
            {item}
          </TextLinkFooter>
        );
      })}
    </FlexFooter>
  );
}
