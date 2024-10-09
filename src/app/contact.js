// src/app/contact.js

"use client";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa; /* Light background */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SubHeading = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #0077c2; /* Focus color */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #0077c2; /* Focus color */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: #0077c2; /* Button color */
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005999; /* Darker shade on hover */
  }
`;

const ContactUs = () => {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <SubHeading>
        Customer feedback is the lifeblood of our business. Tell us what’s on your mind, good or bad.
        We respond to all customer feedback and look forward to hearing from you!
      </SubHeading>

      <form>
        <FormGroup>
          <Label htmlFor="name">Your Name (Required)</Label>
          <Input type="text" id="name" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Your Email (Required)</Label>
          <Input type="email" id="email" required />
        </FormGroup>

        {/* Honeypot Field */}
        <FormGroup style={{ display: "none" }}>
          <Label htmlFor="honeypot">[Honeypot Honeypot-umpl]</Label>
          <Input type="text" id="honeypot" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="mobile">Your Mobile (Required)</Label>
          <Input type="tel" id="mobile" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Your Message</Label>
          <TextArea id="message" rows="4" required />
        </FormGroup>

        <Button type="submit">Send</Button>
      </form>
    </Container>
  );
};

export default ContactUs;
