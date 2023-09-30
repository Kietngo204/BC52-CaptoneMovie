import React from "react";
import { getTicketMovieBox } from "../../../apis/ticketAPI";
import { useQuery } from "@tanstack/react-query";
import { GridContainer } from "./styledMovieList";
import { MapInteractionCSS } from "react-map-interaction";
import { useTicketContext } from "../../../contexts/TicketContext/TicketContext";
import MovieSeatItem from "./MovieSeatItem/MovieSeatItem";
export default function MovieSeatList({ showtimeId }) {
  const { selectedSeats, handleSelect } = useTicketContext();
  console.log(selectedSeats);
  const { data, isLoading } = useQuery({
    queryKey: ["listBoxMovie", showtimeId],
    queryFn: () => getTicketMovieBox(showtimeId),
    enabled: !!showtimeId,
  });

  const listSeat = data?.danhSachGhe || [];

  return (
    <MapInteractionCSS>
      <GridContainer>
        {listSeat.map((item) => {
          const isSelected = selectedSeats.find(
            (chair) => chair.maGhe === item.maGhe
          );
          return (
            <MovieSeatItem
              seat={item}
              key={item.maGhe}
              handleSelect={handleSelect}
              isSelected={!!isSelected}
              isLoading={isLoading}
            />
          );
        })}
      </GridContainer>
    </MapInteractionCSS>
  );
}
