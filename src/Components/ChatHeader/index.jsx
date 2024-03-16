import React from 'react'
import { Box } from '@mui/material'
import styles from "./style.module.scss"
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
const ChatHeader = () => {
  return (
    <>
    <Box className={styles.chatHeader}>
    <ListItem className={styles.listItem} alignItems="flex-start" sx={{bgcolor: 'background.paper' , marginTop : 1 , heigth : '150px'}}>
        <ListItemAvatar className={styles.listAvatar} >
          <Avatar className={styles.avatar} alt="Usama khan" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText className={styles.listItemText}
          primary="Muhammad Osama khan"
          secondary = "last seen 2am"

        />
      </ListItem>
    </Box>
    
    
    </>
    )
}

export default ChatHeader