import React from 'react'
import TextField from '@mui/material/TextField';
import styles from "./style.module.scss"
import { Box } from '@mui/material';
import { FaUserLarge } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import Button from '@mui/material/Button';
import {signUpConstants} from "../../Components/Contants/index"
const signup = () => {
  console.log(signUpConstants)
  return (
    <Box className={styles.signUpContainer}>
    <div>
    <Box>
    {signUpConstants.length > 0  && signUpConstants?.map((value,index)=>(
      <TextField
      className={styles[value.className]}
      variant={'outlined'}
      label={`${value.label}`}
      sx={{width : '100%'}}
      InputProps={{
        startAdornment: (
          <value.icon
            style={{ color: '#14266A' , fontSize : '23',  marginRight: '8px',}} // Customize the icon color
          />
        ),
      }}
      InputLabelProps={{
        style: {
          fontSize: '20px', // Adjust the font size as needed
          marginBottom : '10px'
        },
      }}
      />
    ))}
     
    </Box>
    </div>
    <div>

      <Button sx={{width : '100%' , backgroundColor : '#172B74' , color : '#fff' , fontWeight :'bold'}} variant="contained">Sign Up</Button>
    </div>

  </Box>
  )
}

export default signup