import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

const TicketProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelect = (seat) => {
    setSelectedSeats([...selectedSeats, seat]);
  };

  return (
    <TicketContext.Provider value={{ selectedSeats, handleSelect }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => {
  const value = useContext(TicketContext);
  return value;
};

export default TicketProvider;
