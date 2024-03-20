import { Box } from '@mui/material'
import React, { useState } from 'react'
import styles from './style.module.scss'
import Drawer from "../../Components/Drawer/index"
import { FaLocationArrow } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";  
import Messages from "../../Components/MessageList/index"
import ChatHeader from "../../Components/ChatHeader/index"


const Chat = () => {
  const[message, setMessage] = useState()
  const[allMessages , setAllMessages] = useState([])
  const userSendMessage = (userMessage)=>{
    setAllMessages([...allMessages , userMessage])
    setMessage("")
  }
  console.log(allMessages)
  return (
   <Box className={styles.chatWrapper}>
    <Box className={styles.userContainer}>
      <Drawer/>
    </Box>
    <Box className={styles.chatContainer}>
        <ChatHeader/>
      <Box className={styles.messagesContainer}>
      <Messages allMessages = {allMessages}/>
      </Box>
      <Box className={styles.inputContainer}>
      <CiFaceSmile className={styles.emojiIcon}/>
      <FaPlus className={styles.plusIcon} />
     <input placeholder='Type a message' value={message} onChange={(e)=> setMessage(e.target.value)} className={styles.messageInput} type="text" />
      <FaLocationArrow onClick={()=>userSendMessage(message)} className={styles.messageIcon}/>
      </Box>
    </Box>
   </Box>
  )
}

export default Chat