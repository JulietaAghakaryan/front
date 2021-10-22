import React from "react";
import "./AddUser.css";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const roles = ["Admin", "User"];

function AddUser() {
  const [role, setRole] = React.useState(roles[0]);
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  
  return (
    <div className="addUser">
    
        <TextField id= "name" label="First Name" variant="outlined" />
        <TextField id= "lastName" label="Last Name" variant="outlined" />
        <TextField id= "username" label="Username" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <TextField select value = {role} label="Select" onChange={handleChange} variant="outlined">
        {roles.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="outlined" color = "success">Save</Button>
    </div>
    
  );
  
}

export default AddUser;
