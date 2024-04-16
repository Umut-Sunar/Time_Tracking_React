import { set } from "mongoose";
import React, { Children, useEffect } from "react";
import styled from "styled-components";

const ProfileCardLinksThemeOptions = styled.option`
  font-size: 8px;
  color: black;

  &:hover {
    box-shadow: 5px 2px 2ch black;
  }
`;

export default function BackgroundBtn(props) {
  const { name, value, setTheme } = props;

  useEffect(() => {
    if (
      value === "dynamicColorful" ||
      value === "white" ||
      value === "yellow" ||
      value === "dark"
    ) {
      setTheme("white");
    } else if (value === "dynamicBlue") {
      setTheme("blue");
    }
  }, [value]);

  return (
    <ProfileCardLinksThemeOptions value={value}>
      {name}
    </ProfileCardLinksThemeOptions>
  );
}
