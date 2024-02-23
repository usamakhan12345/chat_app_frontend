import { Box } from '@mui/material'
import React from 'react'
import styles from './style.module.scss'
import Drawer from "../../Components/Drawer/index"
const Chat = () => {
  return (
   <Box className={styles.chatWrapper}>
    <Box className={styles.userContainer}>
      <Drawer/>
    </Box>
    <Box className={styles.chatContainer}>

    </Box>
   </Box>
  )
}

export default Chat