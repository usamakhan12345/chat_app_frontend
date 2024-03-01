import { Box } from '@mui/material'
import React from 'react'
import styles from './style.module.scss'
import Drawer from "../../Components/Drawer/index"
import { FaLocationArrow } from "react-icons/fa6";
const Chat = () => {
  return (
   <Box className={styles.chatWrapper}>
    <Box className={styles.userContainer}>
      <Drawer/>
    </Box>
    <Box className={styles.chatContainer}>
      <Box>

      <ul>
        <li style={{backgroundColor : 'red' , width : '50%' , textAlign : 'left' , position : 'absolute' , right : 0}}>usama</li>
      </ul>
      </Box>
     <input className={styles.messageInput} type="text" />
      <FaLocationArrow className={styles.messageIcon}/>
    </Box>
   </Box>
  )
}

export default Chat