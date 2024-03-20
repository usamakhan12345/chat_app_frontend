import { Box } from '@mui/material'
import React from 'react'
import styles from "./style.module.scss"
import DoneIcon from '@mui/icons-material/Done';
const MessageList = ({allMessages}) => {
    const user = ['usamjddjdjdjdjdjdj djdjdjjd jdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkjdjdj jdjdj djdjdd dididi dididi idididid idid idididi a' , 'ashad' , 'ali', 'test']
  return (
    <>
    <Box>
        
      <ul className={styles.listHead}>
        {allMessages.map((value , index)=> (
          <>

            <li  className={styles.listItem} >{value}  <span className={styles.messageTime}>9:00 PM</span> 
            <span> <DoneIcon className={styles.tickIcon}/> </span> </li>
           
          </>
        ))}
        {/* <li className={styles.listItemLeft}>test test testdddddddddddddddd</li> */}
      </ul>
      
    </Box>
    </>
  )
}

export default MessageList