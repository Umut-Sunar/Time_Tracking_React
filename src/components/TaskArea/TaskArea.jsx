import React from "react";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import TaskInput from "./TaskInput";
import TaskProjectSelection from "./TaskProject";

export default function TaskArea() {
  const style = {
    py: 0,
    width: "100%",
    maxWidth: 360,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    // backgroundColor: "background.paper",
  };

  return (
    <>
    <div className="taskArea-container">
      <List sx={style}>
        <TaskInput></TaskInput>
        <TaskProjectSelection></TaskProjectSelection>
      </List>
      <Divider component="li" />
      </div>
    </>
  );
}
