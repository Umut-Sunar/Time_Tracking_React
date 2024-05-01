import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function TaskProjectSelection() {
  const [project, setProject] = React.useState("");
  const [projectList, setProjectList] = React.useState([
    "Proje1",
    "Proje2",
    "Proje3",
  ]);

  const handleChange = (event) => {
    setProject(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, Width: 50 }}>
        <InputLabel id="demo-simple-select-helper-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={project}
          label="Project"
          onChange={handleChange}
        >
          {projectList.map((eachProject,id) => {
            return <MenuItem  key={id} value={eachProject}>{eachProject}</MenuItem>;
          })}
        </Select>
        <FormHelperText>
          When you select project, your task go under selected project
        </FormHelperText>
        
      </FormControl>
    </div>
  );
}
