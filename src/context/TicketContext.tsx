import React, { useState, createContext } from 'react';

type CurrentTicket = {
  currentTicket: string | null;
  chooseTicket: (id: string) => void;
};
export const TicketContext = createContext<CurrentTicket | null>(null);
const TicketContextProvider = (props: any) => {
  const [currentTicket, setCurrentTicket] = useState<string | null>(null);
  const chooseTicket = (id: string) => {
    setCurrentTicket(id);
  };
  return (
    <TicketContext.Provider value={{ currentTicket, chooseTicket }}>
      {props.children}
    </TicketContext.Provider>
  );
};

export default TicketContextProvider;
