import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import { TicketContext } from '../context/TicketContext';
import { Link } from '@reach/router';

const getTicketsQuery = gql`
  {
    tickets {
      id
      number
      owner {
        avatar
      }
      reportedTime
      asset {
        name
      }
      status
    }
  }
`;
const Background = styled.div`
  background-color: #323232;
  padding: 10px;
`;
const OneTicket = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  border-top: 2px solid #242424;
  border-left: 5px solid #323232;
`;
const Avatar = styled.img`
  width: 35px;
  height: 35px;
  height: auto;
  border-radius: 50%;
`;
const TicketText = styled.div`
  width: 110px;
  color: #989898;
  font-size: 12px;
  padding: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const Tickets = styled.ul`
  padding: 0;
  margin: 0;
`;
const OneTicketLabelArea = styled(OneTicket)`
  border: 0;
`;
const TicketLabels = styled(TicketText)`
  font-weight: 400;
  font-size: 11px;
  text-transform: capitalize;
`;
const AvatarLabel = styled(TicketLabels)`
  padding: 0 10px 0 0;
  width: 35px;
`;
const OneTicketChosen = styled(OneTicket)`
  background-color: #414141;
  border-left: 5px solid #613fa6;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const TicketList = () => {
  const { loading, error, data } = useQuery(getTicketsQuery);
  const ticketContext = useContext(TicketContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Background>
      <Tickets>
        <OneTicketLabelArea>
          <AvatarLabel>OWNER</AvatarLabel>
          <TicketLabels>REPORTED</TicketLabels>
          <TicketLabels>ASSET</TicketLabels>
          <TicketLabels>STATUS</TicketLabels>
        </OneTicketLabelArea>
        {data.tickets.map((ticket: any) => {
          const date = ticket.reportedTime.split('T')[0].split('-');
          const time = ticket.reportedTime
            .split('T')[1]
            .split('.')[0]
            .slice(0, 5);
          return ticketContext?.currentTicket === ticket.id ? (
            <OneTicketChosen
              key={ticket.number}
              onClick={() => ticketContext?.chooseTicket(ticket.id)}
            >
              <Avatar src={ticket.owner.avatar} alt="" />
              <TicketText>{`${date[2]}/${date[1]}/${date[0]} ${time}`}</TicketText>
              <TicketText>{ticket.asset.name}</TicketText>
              <TicketText>{ticket.status}</TicketText>
            </OneTicketChosen>
          ) : (
            <StyledLink to={`/${ticket.id}`} key={ticket.number}>
              <OneTicket onClick={() => ticketContext?.chooseTicket(ticket.id)}>
                <Avatar src={ticket.owner.avatar} alt="" />
                <TicketText>{`${date[2]}/${date[1]}/${date[0]} ${time}`}</TicketText>
                <TicketText>{ticket.asset.name}</TicketText>
                <TicketText>{ticket.status}</TicketText>
              </OneTicket>
            </StyledLink>
          );
        })}
      </Tickets>
    </Background>
  );
};

export default TicketList;
