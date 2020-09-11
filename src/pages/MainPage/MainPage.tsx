import React from 'react';
import styled from 'styled-components';
import TicketList from '../../components/TicketList';
import TicketContextProvider from '../../context/TicketContext';
import TicketContentComponent from '../../components/TicketContentComponent';
import { Router, RouteComponentProps, useParams } from '@reach/router';
const Header = styled.h2`
  margin: 5px 0 5px 10px;
  color: #989898;
`;

const MainContent = styled.div`
  display: flex;
  border-top: 5px solid #613fa6;
  height: 1000px;
  margin: 0 10px;
`;
const TicketListWrapper = styled.div`
  margin: 0 10px;
`;

const TicketListBackGrey = styled(TicketList)`
  background-color: #323232;
`;
let Content = (props: RouteComponentProps) => {
  const params = useParams();
  return <TicketContentComponent id={params.id}></TicketContentComponent>;
};
const FullWidthRouter = styled(Router)`
  margin: 0 10px;
  max-width: 100%;
  width: 100%;
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
          <FullWidthRouter>
            <Content path="/:id" />
            <Content path="/" />
          </FullWidthRouter>
        </TicketContextProvider>
      </MainContent>
    </>
  );
};

export default MainPage;
