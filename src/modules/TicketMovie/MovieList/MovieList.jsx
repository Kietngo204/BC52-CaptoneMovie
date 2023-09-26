import React, { useState } from "react";
import { getTicketMovieBox } from "../../../apis/ticketAPI";
import { useQuery } from "@tanstack/react-query";
import { GridContainer } from "./styledMovieList";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent>
            <GridContainer>
              {listSeat.map((item) => {
                return <button key={item.maGhe}>{item.tenGhe}</button>;
              })}
            </GridContainer>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
}
