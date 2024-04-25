import styled from "styled-components";
import React, { useState } from "react";

import { devices } from "../../deviceStyles/devices";
import { Link, Navigate } from "react-router-dom";


const Container = styled.div`
  width: 450px;
  height: 550px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 2px 0px #524ee1;
  position: "relative";

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
  color: black;
  text-align: center;
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

const SytledLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
  color: black;
`;

const SubmitButon = styled.button`
  display: inline-block;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: -6px 6px 0px 0px #000;
  width: 200px;
  height: 33px;

  &:active {
    box-shadow: 0px 0px 0px 0px white;
  }
`;

export default function Auth(props) {
  const { submitAuth } = props;

  const [buttonTitle, setButtonTitle] = useState("Login");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [checkValue, setCheckValue] = useState(true);

  function submitHandler(e) {
e.preventDefault()

    const gettedUserInfo = {
      
      email: e.target.email.value,
      pass: e.target.password.value,
      isRemember: e.target.checkbox.checked,
    };

  submitAuth(gettedUserInfo)

    setEmailValue("");
    setCheckValue("");
    setPassValue("");
  }

  function emailOnChangeHandler(e) {
    setEmailValue(e.target.value);
  }

  function passOnChangeHandler(e) {
    setPassValue(e.target.value);
  }
  function checkListener(e) {

   checkValue=== false ? setCheckValue(true): setCheckValue(false)
  }

  return (
    <>
      <Container className="Container">
        <ContentWrapper>
          <Title>Start Experience</Title>
          <form onSubmit={(e) => submitHandler(e)}>
            <InputContainer>
              <StyledInput
                type="email"
                id="email"
                name="email"
                placeholder=" "
                value={emailValue}
                onChange={(e) => {
                  emailOnChangeHandler(e);
                }}
                required
              />
              <StyledLabel htmlFor="email">Email</StyledLabel>
            </InputContainer>
            <InputContainer>
              <StyledInput
                type="password"
                name="password"
                id="password"
                placeholder=" "
                value={passValue}
                onChange={(e) => passOnChangeHandler(e)}
                required
              />
              <StyledLabel htmlFor="password">Password</StyledLabel>
            </InputContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <SubmitButon type="submit">{buttonTitle}</SubmitButon>
              <br />
              <div
                style={{
                  gap: "20px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    name="checkbox"
                    type="checkbox"
                    checked={checkValue}
                    onChange={checkListener}
                  />
                  Remember Me
                </label>
                <SytledLink to={"www.google.com.tr"}>
                  Forgot Password
                </SytledLink>
              </div>
            </div>
            <br />
            <hr style={{ width: "80%" }} />

            <p>OR</p>
            <br />
            <SubmitButon type="submit">Sign up</SubmitButon>
          </form>
        </ContentWrapper>
      </Container>
    </>
  );
}
