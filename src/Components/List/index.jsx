import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styles from './style.module.scss'
export default function AlignItemsList() {
  return (
    <>
    <List className={styles.listWrapper}>
      <ListItem className={styles.listItem} alignItems="flex-start" sx={{bgcolor: 'background.paper' , marginTop : 1 , heigth : '150px'}}>
        <ListItemAvatar className={styles.listAvatar} >
          <Avatar className={styles.avatar} alt="Usama khan" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Muhammad Osama khan"
          secondary = "shehzadausamakhan@gmail.com"

        />
      </ListItem>
     
    </List>
          </>
  );
}