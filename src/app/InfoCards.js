// components/InfoCards.js
"use client";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background-color: #f8f9fa; // Light background color
`;

const Card = styled.div`
  flex: 1; // Evenly distribute space
  margin: 0 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: white;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

const InfoCards = () => {
  return (
    <Container>
      <Card>
        <Title>Product Approvals</Title>
        <Description>
          NexGen is one of the very few companies from India with more than 1000 approved products from CDSCO.
        </Description>
      </Card>
      <Card>
        <Title>Sterile Facility</Title>
        <Description>
          NexGen is now approved by CDSCO to manufacture and use sterile orthopedic implants with approved In-House Sterile Facility.
        </Description>
      </Card>
      <Card>
        <Title>Company Presence</Title>
        <Description>
          Ushtup Medica is now available in more than 30 countries across the globe, and in almost all continents of the world.
        </Description>
      </Card>
    </Container>
  );
};

export default InfoCards;
