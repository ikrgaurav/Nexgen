// components/AlternatingSection.js

"use client";

import styled from 'styled-components';

const data = [
  {
    heading: "Our Innovations",
    description:
      "At Ushtup Medica, we focus on innovative solutions that enhance surgical outcomes and improve patient safety.",
    imageSrc: "/path/to/your/image1.jpg", // Update this path
  },
  {
    heading: "Customer Care",
    description:
      "We prioritize customer care, ensuring that every client receives the tailored support they need.",
    imageSrc: "/path/to/your/image2.jpg", // Update this path
  },
  {
    heading: "Global Presence",
    description:
      "Ushtup Medica is available in over 30 countries, providing world-class orthopedic solutions.",
    imageSrc: "/path/to/your/image3.jpg", // Update this path
  },
];

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  flex-direction: row;
  &:nth-child(even) {
    flex-direction: row-reverse; // Reverse layout for even sections
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 500px; // Limit the width of the text
  margin: 1rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center; // Center the image
`;

const Image = styled.img`
  max-width: 100%; // Make image responsive
  height: auto; // Maintain aspect ratio
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  text-align: justify;
`;

const AlternatingSection = () => {
  return (
    <>
      {data.map((item, index) => (
        <SectionContainer key={index}>
          <TextContainer>
            <Heading>{item.heading}</Heading>
            <Description>{item.description}</Description>
          </TextContainer>
          <ImageContainer>
            <Image src={item.imageSrc} alt={item.heading} />
          </ImageContainer>
        </SectionContainer>
      ))}
    </>
  );
};

export default AlternatingSection;
