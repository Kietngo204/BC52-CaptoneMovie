import React from "react";
import {
  BackgroundTicket,
  FormatBackground,
  MiniCardLi,
  MiniCardUl,
  TextTicket,
} from "../MovieSeatList/styledMovieList";
import { Box } from "@mui/material";
import { useTicketContext } from "../../../contexts/TicketContext/TicketContext";

export default function Ticket({ infoCinema }) {
  console.log(infoCinema);
  const { selectedSeats, totalPrice, removeSeat } = useTicketContext();
  const handleSeatSelect = (seat) => {
    // Kiểm tra số lượng ghế đã chọn
    if (selectedSeats.length >= 8) {
      // Sử dụng alert để hiển thị thông báo khi vượt quá 8 ghế
      alert("Bạn không thể chọn quá 8 ghế.");
      return;
    }

    // Thêm ghế vào danh sách đã chọn
    // Ví dụ:
    // addSeatToSelected(seat);
  };

  return (
    <BackgroundTicket>
      <FormatBackground bg="url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-top-seatmap.png) repeat-x top left transparent;"></FormatBackground>
      <MiniCardUl>
        <MiniCardLi br="1px solid #cccc" p="0 10px 0 0">
          <Box sx={{ width: "150px", height: "150px", marginTop: "16px" }}>
            <img
              src={infoCinema.hinhAnh}
              width="100%"
              height="100%"
              alt={infoCinema.tenPhim}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <TextTicket pl="8px">{infoCinema.tenPhim}</TextTicket>
          </Box>
        </MiniCardLi>
        <MiniCardLi p="0 10px" br="1px solid #cccc">
          <Box display={"flex"} flexDirection={"column"}>
            <TextTicket>{infoCinema.tenCumRap}</TextTicket>
            <TextTicket>{infoCinema.tenRap}</TextTicket>
            <TextTicket>{infoCinema.ngayChieu}</TextTicket>
            <TextTicket>{infoCinema.gioChieu}</TextTicket>
            <TextTicket>{infoCinema.diaChi}</TextTicket>
          </Box>
        </MiniCardLi>
        <MiniCardLi p="0 10px">
          <Box display={"flex"} flexDirection={"column"}>
            <TextTicket>Thanh toán</TextTicket>
            <TextTicket>{totalPrice} VNĐ</TextTicket>
            <TextTicket>Ghế bạn chọn :</TextTicket>
            <Box display={"flex"}>
              {selectedSeats.map((item, index) => {
                const separator =
                  index === selectedSeats.length - 1 ? "" : ", ";
                return (
                  <TextTicket key={item.stt}>
                    {item.tenGhe} {separator}{" "}
                  </TextTicket>
                );
              })}
            </Box>
          </Box>
        </MiniCardLi>
      </MiniCardUl>
      <FormatBackground bg="url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-top-seatmap.png) repeat-x bottom left transparent;"></FormatBackground>
    </BackgroundTicket>
  );
}
