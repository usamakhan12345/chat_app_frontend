import { Box } from '@mui/material'
import React from 'react'
import styles from "./style.module.scss"
const MessageList = ({allMessages}) => {
    const user = ['usamjddjdjdjdjdjdj djdjdjjd jdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkjdjdj jdjdj djdjdd dididi dididi idididid idid idididi a' , 'ashad' , 'ali', 'test']
  return (
    <>
    <Box>
        
      <ul className={styles.listHead}>
        {allMessages.map((value , index)=> (
            <li className={styles.listItem} >{value}</li>
        ))}
        {/* <li className={styles.listItemLeft}>test test testdddddddddddddddd</li> */}
      </ul>
      
    </Box>
    </>
  )
}

export default MessageList