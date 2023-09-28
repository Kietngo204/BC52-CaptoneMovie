import React, { useState } from "react";
import { getTicketMovieBox } from "../../../apis/ticketAPI";
import { useQuery } from "@tanstack/react-query";
import { ButtonSeatMovie, GridContainer } from "./styledMovieList";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import cn from "classnames";
export default function MovieList({ showtimeId }) {
  const { data, isLoading } = useQuery({
    queryKey: ["listBoxMovie"],
    queryFn: () => getTicketMovieBox(showtimeId),
    enabled: !!showtimeId,
  });
  const listSeat = data?.danhSachGhe || [];
  return (
    <TransformWrapper
      initialScale={1}
      // initialPositionX={200}
      // initialPositionY={200}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent
            contentStyle={{ display: "flex", justifyContent: "center" }}
          >
            <GridContainer>
              {listSeat.map((item) => {
                let bg = "";
                if (item.loaiGhe === "Thuong") {
                  bg = "#722ed1";
                } else if (item.loaiGhe === "Vip") {
                  bg = "#f5222d";
                } else if (item.daDat === false) {
                  bg = "#404040";
                }
                return (
                  <ButtonSeatMovie
                    key={item.maGhe}
                    bg={item.daDat ? '"#404040' : bg}
                    evt={item.daDat ? "none" : ""}
                    disabled={item.daDat}
                    onClick={() => {}}
                  >
                    {item.tenGhe}
                  </ButtonSeatMovie>
                );
              })}
            </GridContainer>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
}
