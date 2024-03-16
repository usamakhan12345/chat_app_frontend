import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import styles from './style.module.scss'
import { CiLogout } from "react-icons/ci";
import List from "../List/index"
import { useEffect } from "react";
export default function TemporaryDrawer() {
  useEffect(() => {
    const handleScroll = () => {
      const drawer = document.querySelector('.MuiDrawer-paper');
      const heading = document.querySelector(`.${styles.heading}`);
      if (drawer.scrollTop > 0) {
        heading.style.backgroundColor = '#333';
      } else {
        heading.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   return (
    <div>
      <Drawer
        open={true}
        className={styles.DrawerContainer}
        variant='permanent'
      >
        <Box
          sx={{ width : '340px' , backgroundColor : '#8D8F8E' }}
        //   role="presentation"
        >   
        <CiLogout className={styles.logOutIcon}/>
        <h3 className={styles.heading}>Chat App</h3>
        <Box
        sx={{display : 'flex' , justifyContent : 'center' , flexDirection : 'column'}}
        >
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>

        </Box>
        <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
