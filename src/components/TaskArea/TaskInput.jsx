import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TaskInput() {


const [taskNamePreDefine,setTaskNamePreDefine] = React.useState('Timelify Projesi')

function taskInputListener(event){

              console.log(event.target.value)


}

  return (


    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Task Name" variant="outlined" onChange={(e)=> taskInputListener(e)} value={taskNamePreDefine} />
    
    </Box>
  );
}