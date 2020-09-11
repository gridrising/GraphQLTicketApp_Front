import React from 'react';
import styled from 'styled-components';

const TicketText = styled.p`
  width: 110px;
  color: #989898;
  font-size: 12px;
  padding: 5px;
  font-weight: 600;
  display: inline;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const TicketSection = styled.div`
  border: 2px solid #2c2c2c;
  margin: 10px 5px;
`;
const TicketSectionLabel = styled.div`
  width: 100%;
  margin: 0;
  padding: 5px 0;
  background-color: #2c2c2c;
`;

type Props = {
  label: string;
  children: any;
};

const TicketInfoSection = (props: Props) => {
  const { children, label } = props;
  return (
    <TicketSection>
      <TicketSectionLabel>
        <TicketText>{label}</TicketText>
      </TicketSectionLabel>
      <Content>{children}</Content>
    </TicketSection>
  );
};

export default TicketInfoSection;
