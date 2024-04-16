import styled from "styled-components";
import React from "react";

import { devices } from "../../deviceStyles/devices";

const Container = styled.div`
  width: 450px;
  height: 550px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 2px 0px #524ee1;

  @media ${devices.sm} {
    max-width: 100%;
    height: 450px;
  }

  @media ${devices.lg} {
    border-radius: 20px;
    background: rgba(204, 141, 141, 0.7);
    box-shadow: 0px 0px 2px 0px #524ee1;
  }
`;

// Styled input container
const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`;

// Styled input
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-top: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    font-size: 12px;
    color: #007bff;
  }
`;

// Styled label
const StyledLabel = styled.label`
  position: absolute;
  left: 20px;
  top: 14px;
  color: #e0d2d2;
  font-size: 10px;
  transition: all 0.3s;
  pointer-events: none; // Make sure click events pass through to the input
`;
const Title = styled.p`
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-style: normal;
  color: black text-align= center;
  line-height: 1.2;
  @media ${devices.sm} {
    font-size: 12px;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 40px;
`;

export default function Auth() {
  return (
    <>
      <Container>
        <ContentWrapper>
          <Title>Start Experience</Title>
          <InputContainer>
            <StyledInput type="text" id="username" placeholder=" " required />
            <StyledLabel htmlFor="username">Username</StyledLabel>
          </InputContainer>
          <InputContainer>
            <StyledInput
              type="password"
              id="password"
              placeholder=" "
              required
            />
            <StyledLabel htmlFor="password">Password</StyledLabel>
          </InputContainer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <input type="checkbox" />
              <label style={{ fontSize: "12px" }}>Remember Me</label>
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </>
  );
}
