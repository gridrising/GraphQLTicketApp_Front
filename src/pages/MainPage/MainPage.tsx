import React from 'react';
import styled from 'styled-components';
import TicketList from '../../components/TicketList';
import TicketContextProvider from '../../context/TicketContext';

const Header = styled.h2`
  margin: 5px 0 5px 10px;
  color: #989898;
`;

const MainContent = styled.div`
  display: flex;
  max-width: 100%;
  border-top: 5px solid #613fa6;
  height: 1000px;
  margin: 0 10px;
`;
const TicketListWrapper = styled.div`
  margin: 0 10px;
`;
const TicketContentWrapper = styled.div`
  margin: 0 10px;
`;
const TicketListBackGrey = styled(TicketList)`
  background-color: #323232;
`;
const MainPage = () => {
  return (
    <>
      <Header>Tickets</Header>
      <MainContent>
        <TicketContextProvider>
          <TicketListWrapper>
            <TicketListBackGrey></TicketListBackGrey>
          </TicketListWrapper>
          <TicketContentWrapper></TicketContentWrapper>
        </TicketContextProvider>
      </MainContent>
    </>
  );
};

export default MainPage;
