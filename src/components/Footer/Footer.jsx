import React from "react";
import { Box, Container, Grid } from "@mui/material";
import FooterBuyTicket from "./FooterBuyTicket";
import FooterCinema from "./FooterCinema";
import FooterContact from "./FooterContact";
export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#212121", color: "#fff", padding: "28px 0" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FooterBuyTicket />
          </Grid>
          <Grid item xs={4}>
            <FooterCinema />
          </Grid>
          <Grid item xs={4}>
            <FooterContact />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
