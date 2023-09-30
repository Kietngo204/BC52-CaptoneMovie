import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, auto);
  gap: 10px;
  overflow: hidden;
`;

export const ButtonSeatMovie = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  /* font-size: 14px; */
  text-align: center;
  color: white;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 5px;
  pointer-events: ${(props) => props.evt};
  background-color: ${(props) => props.bg};
`;
