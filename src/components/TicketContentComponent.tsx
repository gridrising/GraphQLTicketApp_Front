import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import TicketInfoSection from './TicketInfoSection';

const Background = styled.div`
  background-color: #323232;
  padding: 10px;
  max-width: 100%;
`;
const StyledText = styled.p`
  width: 110px;
  color: #989898;
  font-size: 12px;
  font-weight: 600;
  display: inline;
  padding: 0 5px;
  margin: 5px 0;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  height: auto;
  margin: 10px;
  border-radius: 50%;
`;
const Labels = styled(StyledText)`
  font-weight: 400;
  font-size: 12px;
  text-transform: capitalize;
  display: block;
`;
const SectionComponent = styled.div`
  margin: 10px;
  padding: 5px;
`;
const AvatarNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const NameSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmptyTicket = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
type Props = {
  id: string;
};

const TicketContentComponent = (props: Props) => {
  const { id } = props;
  console.log(id);
  const getTicketQuery = gql`
{
  ticket(id:"${id}") {
    id,
    number,
    lastUpdated,
    owner {
      firstName,
      lastName,
      avatar,
      specialities,
    }
    reportedTime,
    description,
    asset {
      name,
      geoCode,
      kmFrom,
      kmTo,
    }
    status,
  }
}
`;
  const { loading, data } = useQuery(getTicketQuery);

  if (loading) return <p>Loading...</p>;
  if (!data)
    return (
      <Background>
        <EmptyTicket>
          <StyledText>No Ticket Selected</StyledText>
        </EmptyTicket>
      </Background>
    );
  return (
    <Background>
      <Labels>TICKET NO</Labels>
      <StyledText>{data.ticket.number}</StyledText>
      <TicketInfoSection label="Owner">
        <AvatarNameWrapper>
          <Avatar src={data.ticket.owner.avatar} alt=""></Avatar>
          <NameSection>
            <StyledText>{`${data.ticket.owner.firstName} ${data.ticket.owner.lastName}`}</StyledText>
            <StyledText>{data.ticket.owner.specialities}</StyledText>
          </NameSection>
        </AvatarNameWrapper>
      </TicketInfoSection>
      <TicketInfoSection label="Details">
        <SectionComponent>
          <Labels>Reported</Labels>
          <StyledText>{data.ticket.reportedTime}</StyledText>
        </SectionComponent>
        <SectionComponent>
          <Labels>Status</Labels>
          <StyledText>{data.ticket.status}</StyledText>
        </SectionComponent>
        <SectionComponent>
          <Labels>Description</Labels>
          <StyledText>{data.ticket.description}</StyledText>
        </SectionComponent>
      </TicketInfoSection>
      <TicketInfoSection label="Asset">
        <SectionComponent>
          <Labels>Name</Labels>
          <StyledText>{data.ticket.asset.name}</StyledText>
        </SectionComponent>
        <SectionComponent>
          <Labels>GeoCode</Labels>
          <StyledText>{data.ticket.asset.geoCode}</StyledText>
        </SectionComponent>
        <SectionComponent>
          <Labels>Location</Labels>
          <StyledText>{data.ticket.asset.kmFrom}</StyledText>
          <StyledText>{data.ticket.asset.kmTo}</StyledText>
        </SectionComponent>
      </TicketInfoSection>
    </Background>
  );
};

export default TicketContentComponent;
