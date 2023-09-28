import React from "react";
import { FlexFooter, LogoFooter, TextFooter } from "../styledFooter";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function FooterContact() {
  return (
    <FlexFooter>
      <Typography>LIÊN HỆ VỚI CHÚNG TÔI</Typography>
      <Box>
        <LogoFooter
          href="https://www.facebook.com/"
          target="_blank"
          display="flex"
          alignItems="center"
        >
          <FacebookIcon fontSize="large" />
          <TextFooter ml="10px">Facebook</TextFooter>
        </LogoFooter>
      </Box>
      <Box>
        <LogoFooter
          href="https://github.com/Kietngo204/BC52-CaptoneMovie"
          target="_blank"
          display="flex"
          alignItems="center"
        >
          <GitHubIcon fontSize="large" />
          <TextFooter ml="10px">GitHub</TextFooter>
        </LogoFooter>
      </Box>
      <Box>
        <LogoFooter
          href="https://www.youtube.com/"
          target="_blank"
          display="flex"
          alignItems="center"
        >
          <YouTubeIcon fontSize="large" />
          <TextFooter ml="10px">Youtube</TextFooter>
        </LogoFooter>
      </Box>
    </FlexFooter>
  );
}
